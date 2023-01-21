import PropTypes from 'prop-types';
//prop-types is handled in typscript

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded, 
}) {
    //underlying element is 'button'
    return <button className="bg-red-50">{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if(count > 1) {
            return "Only one of primary, secondary, success, warning, or danger can be true";
        }

    },
};

export default Button;