const ButtonMailto = ({ mailto, label }: { mailto: string; label: string }) => {
  return <a href={`mailto:${mailto}`}>{label}</a>;
};

export default ButtonMailto;
