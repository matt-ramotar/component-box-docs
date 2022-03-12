export const simpleScreen = `
@Composable
fun Screen() {
    val zipline = ComponentBoxZipline(getZiplineUrl(), getScript())
    val presenter = ComponentBoxPresenter(zipline)

    ComponentBoxView(
        componentBoxUrl = getComponentBoxUrl(),
        presenter = presenter,
        context = getContext(),
        Loading = { Loading() },
        Fallback = { Fallback() }
    )
}
`

export const simpleFragment = `
class Screen(
    private val componentBoxUrl: String,
    private val presenter: ComponentBoxPresenter,
    private val context: Context
): ComponentBoxFragment()
`


