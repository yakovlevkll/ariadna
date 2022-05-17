# Дифференцирование

## Таблица производных

### Основные

| Функция  | Производная         |
| -------- | ------------------- |
| $const$  | $0$                 |
| $x^n$    | $n \cdot x^{n - 1}$ |
| $e^x$    | $e^x$               |
| $\ln x$  | $\dfrac{1}{x}$      |
| $\sin x$ | $\cos x$            |
| $\cos x$ | $-\sin x$           |

Важно: $n \in  \R, n \neq  0$

### Вспомогательные

Производные из таблицы ниже могут быть найдены с использованием правил дифференцирования

| Функция     | Производная                  |
| ----------- | ---------------------------- |
| $a^x$       | $a^x \ln a$                  |
| $\log_a x$  | $\dfrac{1}{x \ln a}$         |
| $\tg x$     | $\dfrac{1}{\cos^2 x}$        |
| $\cot x$    | $-\dfrac{1}{\sin^2 x}$       |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$  |
| $\arccos x$ | $-\dfrac{1}{\sqrt{1 - x^2}}$ |
| $\arctg x$  | $\dfrac{1}{\sqrt{1 + x^2}}$  |
| $\arcctg x$ | $-\dfrac{1}{\sqrt{1 + x^2}}$ |

## Правила дифференцирования

Для краткости записи правил ниже допускаем следующее

$u = u(x)$
$v = v(x)$

### Умножение на константу

$$\boxed{(c \cdot u)' = c \cdot u'}$$

$(5x^2)' = 5 \cdot (x^2)' = 5 \cdot 2x = 10x$

### Сложение / вычитание

$$\boxed{(u \pm v)' = u' \pm v'}$$

$(x^3 + \sin x)' = 3x^2 + \cos x$

### Правило умножения

$$\boxed{(u \cdot v)' = u' \cdot v + u \cdot v'}$$

$(x \cdot \ln x)' = 1 \cdot \ln x + x \cdot \dfrac{1}{x} = \ln x + 1$

### Правило деления

$$\boxed{\left( \dfrac{u}{v} \right)' = \dfrac{u' \cdot v - u \cdot v'}{v^2}}$$

$\left( \dfrac{e^x}{x} \right)' = \dfrac{e^x\cdot x - e^x \cdot 1}{x^2} = \dfrac{e^x\cdot (x - 1)}{x^2}$

### Производная сложной функции (правило цепочки)

Правило ниже применяется рекурсивно

$$\boxed{(u(v(x))' = u'(v(x)) \cdot v'(x)}$$

$(\sin(2x))' = \cos(2x) \cdot (2x)' = 2 \cos(2x)$

$(\cos(e^{x^2}))' = -\sin(e^{x^2}) \cdot (e^{x^2})' = -\sin(e^{x^2}) \cdot e^{x^2} \cdot (x^2)' = -\sin(e^{x^2}) \cdot e^{x^2} \cdot 2x = - 2x e^{x^2} \sin(e^{x^2})$


<Todo type="tasks">

Hyperbolic trigonometric functions?

:::
