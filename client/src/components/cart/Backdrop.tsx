interface BackdropProps {
  isOpen: boolean;
  onHideBackdrop: () => void;
}

export const Backdrop = ({ isOpen, onHideBackdrop }: BackdropProps) => (
  <div
    className={`${
      !isOpen ? 'hidden hide-backdrop' : 'open-backdrop'
    }   absolute cart z-[55] bg-black/60 left-0 w-full min-h-full h-full pb-4 top-0`}
    onClick={onHideBackdrop}
  />
);
