export const tipo = 'max';
export const objetivo = '520x1 + 450x2 = 0';
export const restricoes = [
  /* Precisa colocar tudo na ordem dos sinais todos F, todos A
       Caso contrario ele reseta para F1 novamente se pular

  '40x1 + 25x2 <= 400',
  '24x1 + 30x2 <= 360',
  '40x1 + 25x2 <= 400',
  '24x1 + 30x2 >= 360',
   40x1 + 25x2 >= 400',
  '24x1 + 30x2 >= 360',
  '24x1 + 30x2 = 360',
  */
  '40x1 + 25x2 <= 400',
  '24x1 + 30x2 <= 360',
]

export const cabecalhoTopo = ['x1', 'x2', 'f1', 'f2', 'f3', 'b'];
export const variaveis = cabecalhoTopo.filter(item => item.includes('x'))
export const cabecalhoEsquerda = ['f1', 'f2', 'f3', 'z'];
export const simplex = [
  [1, 0, 1, 0, 0, 4],
  [0, 2, 0, 1, 0, 12],
  [2, 3, 0, 0, 1, 21],
  [-3, -5, 0, 0, 0, 0]
]