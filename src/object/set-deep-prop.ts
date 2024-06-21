import type { GetPathValue } from '@recon-struct/utility-types/dist/object/get-path-value'
import type { GetPaths } from '@recon-struct/utility-types/dist/object/get-paths'
import type { Split } from '@recon-struct/utility-types/dist/string/split'
import type { Join } from '@recon-struct/utility-types/dist/tuple/join'
import isNullish from '~/type-guard/is-nullish'

const setDeepProp = <
  A extends object,
  B extends Join<GetPaths<A>, D>,
  C extends GetPathValue<A, Split<B, D>>,
  D extends string = '.',
>(
  initialRef: A,
  key: B,
  value: C,
  separator: D = '.' as D,
) => {
  const subKeys = (key as string).split(separator)
  let ref: Record<string, any> = initialRef

  for (let i = 0; i < subKeys.length; i++) {
    const subKey = subKeys[i]

    if (i === subKeys.length - 1) {
      ref[subKey] = value
    } else {
      if (isNullish(ref[subKey])) {
        throw new Error(`The key ${subKey} does not exist`)
      }
      ref = ref[subKey]
    }
  }

  return initialRef
}

export default setDeepProp
