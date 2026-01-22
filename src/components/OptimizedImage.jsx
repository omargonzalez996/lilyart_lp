const OptimizedImage = ({ src, alt, className, loading = 'lazy', ...props }) => {
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
