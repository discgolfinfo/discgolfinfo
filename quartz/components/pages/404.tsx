import { i18n } from "../../i18n"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function NotFound({ cfg }: QuartzComponentProps) {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={`https://${cfg.baseUrl}`}>↳ Вернуться на главную</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
