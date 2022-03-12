export const simpleScreen = `
@Composable
fun Screen() {
    val zipline = ComponentBoxZipline(getZiplineUrl(), getScript())
    val presenter = ComponentBoxPresenter<ComponentBox.Screen>(zipline)

    ComponentBoxView(
        componentBoxUrl = getComponentBoxUrl(),
        presenter = presenter,
        context = getContext(),
        Loading = { Loading() },
        Fallback = { Fallback() }
    )
}
`


export const simpleBanner = `
@Composable
fun Banner() {
    val zipline = ComponentBoxZipline(getZiplineUrl(), getScript())
    val presenter = ComponentBoxPresenter<ComponentBox.Banner>(zipline)

    ComponentBoxView(
        componentBoxUrl = getComponentBoxUrl(),
        presenter = presenter,
        context = getContext(),
        Loading = { Loading() },
        Fallback = { Fallback() }
    )
}
`


export const simpleModal = `
@Composable
fun Modal() {
    val zipline = ComponentBoxZipline(getZiplineUrl(), getScript())
    val presenter = ComponentBoxPresenter<ComponentBox.Modal>(zipline)

    ComponentBoxView(
        componentBoxUrl = getComponentBoxUrl(),
        presenter = presenter,
        context = getContext(),
        Loading = { Loading() },
        Fallback = { Fallback() }
    )
}
`