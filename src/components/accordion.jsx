import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useCallback } from "react";
import { cn } from "../lib/utils";

/**
 * Context for accordion components
 */
const AccordionContext = React.createContext({});
/**
 * Hook to use the accordion context
 */
const useAccordion = () => React.useContext(AccordionContext);

/**
 * Container component for accordion items
 */
export function AccordionContainer({ children, className }) {
  return (
    <div className={cn("grid grid-cols-2 gap-1", className)}>{children}</div>
  );
}

/**
 * Wrapper component for accordion items
 */
export function AccordionWrapper({ children }) {
  return <div>{children}</div>;
}

/**
 * Accordion component
 */
export function Accordion({ children, multiple, defaultValue }) {
  /**
   * State for active index
   */
  const [activeIndex, setActiveIndex] = React.useState(
    multiple
      ? Array.isArray(defaultValue)
        ? defaultValue
        : []
      : defaultValue || null
  );

  /**
   * Function to change the active index
   */
  const onChangeIndex = useCallback(
    (value) => {
      setActiveIndex((currentActiveIndex) => {
        if (!multiple) {
          return value === currentActiveIndex ? null : value;
        }

        if (Array.isArray(currentActiveIndex)) {
          if (currentActiveIndex.includes(value)) {
            return currentActiveIndex.filter((i) => i !== value);
          }
          return [...currentActiveIndex, value];
        }

        return [value];
      });
    },
    [multiple]
  );

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;

    const childProps = child.props;
    const value = childProps.value;
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : activeIndex === value;

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

/**
 * Accordion item component
 */
export function AccordionItem({ children, value, className }) {
  const { isActive } = useAccordion();

  return (
    <div
      data-active={isActive || undefined}
      className={cn("rounded-lg overflow-hidden mb-2 group", className)}
    >
      {children}
    </div>
  );
}

/**
 * Accordion header component
 */
export function AccordionHeader({ children, customIcon, className }) {
  const { isActive, value, onChangeIndex } = useAccordion();

  /**
   * Function to handle click event
   */
  const handleClick = useCallback(() => {
    if (value && onChangeIndex) {
      onChangeIndex(value);
    }
  }, [onChangeIndex, value]);

  return (
    <motion.div
      data-active={isActive || undefined}
      className={cn(
        "p-4 cursor-pointer w-full transition-all font-semibold  text-neutral-500    hover:text-black flex justify-between gap-2 items-center",
        className
      )}
      onClick={handleClick}
    >
      {children}
      {!customIcon && (
        <ChevronDown
          className={cn(
            "transition-transform ",
            isActive ? "rotate-180" : "rotate-0"
          )}
        />
      )}
    </motion.div>
  );
}

/**
 * Accordion panel component
 */
export function AccordionPanel({ children, className, articleClassName }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          data-active={isActive || undefined}
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto", overflow: "hidden" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className={cn("  px-2  text-black ", className)}
        >
          <motion.article
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            transition={{
              type: "spring",
              duration: 0.8,
              bounce: 0,
            }}
            className={cn(
              "px-3 bg-transparent  pb-4 space-y-2",
              articleClassName
            )}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
