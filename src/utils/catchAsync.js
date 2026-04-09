/**
 * Global error-catching wrapper for async route handlers
 * Wraps async functions to automatically catch errors and pass them to next middleware
 * @param {Function} fn - The async function to wrap
 * @returns {Function} - Express middleware function
 */
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = catchAsync;