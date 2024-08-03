const Divider = () => {
  return (
    <div className="flex  gap-2 text-muted-foreground  items-center ">
      <section className="h-[1px] bg-muted-foreground flex-1"></section>
      <section>or</section>
      <section className="h-[1px] bg-muted-foreground flex-1"></section>
    </div>
  );
};
export default Divider;
