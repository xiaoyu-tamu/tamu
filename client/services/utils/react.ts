type GetDefaultProps<P extends object, DP extends Partial<P> = Partial<P>> = DP &
  Pick<P, Exclude<keyof P, keyof DP>>;

export const createPropsGetter = <DP extends object>(defaultProps: DP) => {
  return <P extends Partial<DP>>(props: P): GetDefaultProps<P, DP> => props as any;
};

export const getProps = <P extends object, DP extends Partial<P> = Partial<P>>(
  props: P,
  defaultProps: DP
): GetDefaultProps<P, DP> => {
  return { ...(defaultProps as object), ...(props as object) } as any;
};
