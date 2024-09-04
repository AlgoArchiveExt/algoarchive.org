'use client';

import { useInput } from '@nextui-org/react';
import React, { forwardRef, useState } from 'react';

import { SearchIcon } from './Icons';
import { CloseFilledIcon } from './Icons';

const styles = {
  //search bar styling
  label: 'text-black/50 dark:text-white/90',
  input: [
    'bg-transparent',
    'text-black/90 dark:text-white/90',
    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
    'text-base',
    'caret-[#989898]',
  ],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'shadow-xl',
    'bg-default-200/50',
    'dark:bg-default/60',
    'backdrop-blur-xl',
    'backdrop-saturate-200',
    'hover:bg-default-200/70',
    'focus-within:!bg-default-200/50',
    'dark:hover:bg-default/70',
    'dark:focus-within:!bg-default/60',
    '!cursor-text',
    'w-full',
  ],
};

const MyInput = forwardRef((props, ref: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    ...props,
    ref,
    // this is just for the example, the props bellow should be passed by the parent component
    label: 'Search',
    type: 'search',
    placeholder: 'Type to search...',
    startContent: (
      <SearchIcon
        className={`pointer-events-none mb-1 shrink-0 dark:text-white/90 ${
          isFocused ? 'text-algo-yellow' : 'text-algo-disabled'
        }`}
      />
    ),
    // custom styles
    classNames: {
      ...styles,
    },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const end = React.useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon className={'text-[#da554e]'} />}</span>;
    }

    return endContent;
  }, [isClearable, getClearButtonProps, endContent]);

  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);

  return (
    <div className="inline-block">
      <Component {...getBaseProps()}>
        {shouldLabelBeOutside ? labelContent : null}
        <div
          {...getInputWrapperProps()}
          role="button"
          onClick={() => {
            domRef.current?.focus();
          }}
        >
          {shouldLabelBeInside ? labelContent : null}
          {innerWrapper}
        </div>
        {description && <div {...getDescriptionProps()}>{description}</div>}
        {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
      </Component>
    </div>
  );
});

MyInput.displayName = 'MyInput';

export default MyInput;
