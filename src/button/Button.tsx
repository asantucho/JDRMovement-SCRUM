import className from 'classnames';

type IButtonProps = {
  onClick?: () => void;
  xl?: boolean;
  children: string;
  formStyle?: boolean;
  type?: 'button' | 'submit' | 'reset';
  scrollToSection?: (id: string) => void;
  sectionId?: string;
  disabled?: boolean;
};

const Button = (props: IButtonProps) => {
  const { type = 'button' } = props;
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'bg-primary-600': true, // Using the primary color
    'hover:bg-primary-100': true, // Using the hover color
    'form-btn': props.formStyle,
    'border-black': true,
    'text-black': true,
  });

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={btnClass}>
      <button type={type} onClick={handleClick}>
        {props.children}
      </button>

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-800;
          }

          .btn-primary:hover {
            @apply text-black bg-primary-100;
          }

          .form-btn {
            @apply inline-block text-lg font-medium py-3 px-6 mx-auto;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
