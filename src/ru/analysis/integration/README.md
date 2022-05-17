# Интегрирование

::: todo

- простейшие интегралы
- замена переменной при интегрировании
- нахождение дифференциала

:::

::: task

1. We know that a function $f(x)$ is defined for all the real numbers and that is twice asymmetrical. We also know that it has a turning point at the abscissa $x = 2$, that the equation of the tangent line to the graph of the function $f(x)$ in this point is $y = -124x + 249$ and $f(-3) = -4$.
   a. Calculate $f''(2)$, $f'(2)$ and $f(2)$.
   b. Calculate $\int_{-3}^{2} f'(x) dx$.

:::

$$\int_{}^{}{x\operatorname{}x\text{dx}}$$

$$u = \operatorname{}x$$

$$dv = xdx$$

$$u = \operatorname{}xdu = ( \operatorname{}x )^{'}dx = 2\ln x( \ln x )^{'}dx = \frac{2\ln x}{x}\text{dx}$$

$$dv = xdxv = \int_{}^{}\text{xdx} = \frac{x^{2}}{2}$$

$$\int_{}^{}{x^{n}\text{dx}} = \frac{x^{n + 1}}{n + 1} + C$$

$$\int_{}^{}{x\operatorname{}x\text{dx}} = \frac{x^{2}\operatorname{}x}{2} - \int_{}^{}{\frac{x^{2}}{2} * \frac{2\ln x}{x}\text{dx}} = \frac{x^{2}\operatorname{}x}{2} - \int_{}^{}{x\ln x\text{dx}}$$

$$u = \ln x \rightarrow du = \frac{1}{x}\text{dx}$$

$$dv = xdx \rightarrow v = \frac{x^{2}}{2}$$

$$\frac{x^{2}\operatorname{}x}{2} - \int_{}^{}{x\ln x\text{dx}} = \frac{x^{2}\operatorname{}x}{2} - ( \frac{x^{2}\ln x}{2} - \int_{}^{}{\frac{x^{2}}{2} * \frac{1}{x}\text{dx}} ) = \frac{x^{2}\operatorname{}x}{2} - \frac{x^{2}\ln x}{2} + \frac{1}{2}\int_{}^{}\text{xdx} =$$

$$= \frac{x^{2}\operatorname{}x}{2} - \frac{x^{2}\ln x}{2} + \frac{1}{2} * \frac{x^{2}}{2} + C = \frac{x^{2}}{2}( \operatorname{}x - \ln x + \frac{1}{2} ) + C$$

$$\int_{}^{}{\frac{\ln x}{x}\text{dx}}$$

$$\int_{}^{}{\frac{\ln x}{x^{2}}\text{dx}}$$

$$\int_{}^{}{( x - 2 )e^{2x}\text{dx}}$$

$$u = x - 2 \rightarrow du = ( x - 2 )^{'}dx = x$$

$$dv = e^{2x}dx \rightarrow v = \int_{}^{}{e^{2x}\text{dx}} = \frac{1}{2}e^{2x}$$

$$\int_{}^{}{( x - 2 )e^{2x}\text{dx}} = \frac{( x - 2 )e^{2x}}{2} - \frac{1}{2}\int_{}^{}{e^{2x}\text{dx}} = \frac{( x - 2 )e^{2x}}{2} - \frac{1}{2} * \frac{1}{2}e^{2x} + C = \frac{e^{2x}}{2}( x - 2 - \frac{1}{2} ) = \frac{e^{2x}}{2}( x - 1\frac{1}{2} )$$

$$\int_{}^{}{( x^{2} + x )e^{- x}\text{dx}}$$

$$\int_{}^{}{x\cos{6x}\text{dx}}$$

$$u = x \rightarrow du = dx$$

$$dv = \cos{6x}dx \rightarrow v = \int_{}^{}{\cos{6x}\text{dx}} = \frac{1}{6}\sin{6x}$$

$$\int_{}^{}{x\cos{6x}\text{dx}} = \frac{1}{6}x\sin{6x} - \frac{1}{6}\int_{}^{}{\sin{6x}\text{dx}} = \frac{1}{6}x\sin{6x} - \frac{1}{6} * ( - \frac{1}{6}x\cos{6x} ) + C =$$

$$= \frac{1}{6}x\sin{6x} + \frac{1}{36}x\cos{6x} + C$$

$$\int_{}^{}{(x - 6)\sin\frac{x}{2}\text{dx}}$$

$$\int_{}^{}{\frac{x}{\operatorname{}x}\text{dx}}$$

$$u = x \rightarrow du = dx$$

$$dv = \frac{1}{\operatorname{}x}dx \rightarrow v = \int_{}^{}{\frac{1}{\operatorname{}x}\text{dx}} = - ctgx$$

$$\int_{}^{}{\frac{x}{\operatorname{}x}\text{dx}} = - xctgx + \int_{}^{}{\text{ctgx}\text{dx}} = - xctgx + \int_{}^{}{\frac{\cos x}{\sin x}\text{dx}} = - xctgx + \int_{}^{}\frac{d(\sin{x)}}{\sin x} =$$

$$= - xctgx + \ln\left| \sin x \right| + C$$

$$\int_{}^{}{x\sin x\cos x\text{dx}}$$

$$\int_{}^{}{\operatorname{atan}{2x}\text{dx}}$$

$$u = \operatorname{atan}{2x} \rightarrow du = ( \operatorname{atan}{2x} )^{'}dx = \frac{1}{1 + ( 2x )^{2}} * ( 2x )^{'}dx = \frac{2}{1 + 4x^{2}}\text{dx}$$

$$dv = dx \rightarrow v = x$$

$$\int_{}^{}{\operatorname{atan}{2x}\text{dx}} = x\operatorname{atan}{2x} - \int_{}^{}{\frac{2x}{1 + 4x^{2}}\text{dx}} = x\operatorname{atan}{2x} - \frac{1}{4}\int_{}^{}\frac{d( 1 + 4x^{2} )}{1 + 4x^{2}} =$$

$$x\operatorname{atan}{2x} - \frac{1}{4}\ln( 1 + 4x^{2} ) + C$$

$$\int_{}^{}{\operatorname{asin}{3x}\text{dx}}$$

$$\int_{}^{}{x\operatorname{atan}x\text{dx}}$$
