let catData = {
  categories: [
    {
      id: 'H1',
      category: 'Clareza Visual e Perceptual',
      shortLabel: 'Clareza',
      colour: '#4A90E2',
      description: 'Garanta que informações relevantes possam ser percebidas, diferenciadas e lidas com clareza, reduzindo competição visual e utilizando cor, tipografia, contraste e espaçamento com propósito.',
      example: {
        text: 'Exemplo portuário: diferencie estados operacionais com cor, texto e símbolo, preservando contraste e legibilidade.',
        img: 'img/exemplo-h1-clareza.png'
      },
      children: [
        {
          name: 'Paleta Semântica do Porto',
          image: 'img/guidelines/h1-paleta.png',
          description: 'Defina uma paleta semântica em que cada cor represente um significado específico do domínio e mantenha esse significado estável em todo o dashboard.',
          usePara: 'Categorias e famílias informacionais, como tipo de carga, operação, área, série analítica ou grupo de indicadores.',
          faca: ['Associar cada cor a um significado definido', 'Repetir a mesma associação em gráficos e telas', 'Reservar cores de destaque para informações realmente prioritárias'],
          evite: ['Usar verde, amarelo e vermelho automaticamente como bom, atenção e crítico', 'Reutilizar a mesma cor para significados diferentes', 'Aplicar muitas cores sem função informacional']
        },
        {
          name: 'Tipografia e Legibilidade',
          image: 'img/guidelines/h1-tipografia.png',
          description: 'Estruture tamanhos, pesos e espaçamentos tipográficos de acordo com a importância da informação e a distância de leitura.',
          usePara: 'KPIs, títulos, rótulos, eixos, tabelas e legendas.',
          faca: ['Manter uma família tipográfica consistente', 'Diferenciar títulos, valores e rótulos por tamanho e peso', 'Testar leitura no tamanho real de uso'],
          evite: ['Misturar muitas fontes', 'Usar textos pequenos em áreas críticas', 'Usar caixa alta em textos longos']
        },
        {
          name: 'Contraste e Separação Visual',
          image: 'img/guidelines/h1-contraste.png',
          description: 'Garanta contraste suficiente entre texto, fundo, controles e elementos gráficos, considerando diferentes condições de visualização.',
          usePara: 'Dashboards em escritórios, salas de controle e telas de diferentes tamanhos.',
          faca: ['Verificar contraste de textos e controles', 'Separar elementos por luminosidade, forma ou espaço', 'Testar a interface em diferentes condições de brilho'],
          evite: ['Texto de baixo contraste', 'Cores visualmente próximas para categorias diferentes', 'Depender apenas de sombras ou brilho']
        },
        {
          name: 'Redução de Ruído Visual',
          image: 'img/guidelines/h1-ruido.png',
          description: 'Remova elementos decorativos ou redundantes que competem com os dados e preserve apenas o que contribui para leitura, comparação ou orientação.',
          usePara: 'Gráficos, KPIs, filtros, tabelas e composição geral do dashboard.',
          faca: ['Manter eixos, unidades e referências necessárias', 'Usar grades apenas quando ajudarem a leitura', 'Priorizar informação sobre decoração'],
          evite: ['3D sem necessidade', 'Bordas, sombras e fundos em excesso', 'Elementos decorativos sem função']
        },
        {
          name: 'Codificação Visual Consistente',
          image: 'img/guidelines/h1-codificacao.png',
          description: 'Mantenha cores, formas, ícones, espessuras e padrões gráficos com significados consistentes ao longo da interface.',
          usePara: 'Categorias e séries que reaparecem em diferentes gráficos, telas ou níveis de análise.',
          faca: ['Repetir a mesma cor, forma ou estilo para o mesmo significado', 'Manter convenções estáveis entre diferentes visualizações', 'Documentar códigos visuais que precisem ser aprendidos'],
          evite: ['Mudar o significado de uma cor entre gráficos', 'Misturar estilos sem função', 'Criar códigos visuais difíceis de aprender']
        },
        {
          name: 'Espaçamento e Respiro',
          image: 'img/guidelines/h1-espacamento.png',
          description: 'Use espaço para organizar grupos, separar contextos e reduzir competição entre elementos sem desperdiçar área útil.',
          usePara: 'Separação entre KPIs, filtros, gráficos, tabelas e blocos analíticos.',
          faca: ['Aplicar margens e espaçamentos consistentes', 'Agrupar por proximidade elementos relacionados', 'Preservar respiro entre níveis informacionais'],
          evite: ['Aglutinar informações', 'Criar grandes vazios sem propósito', 'Usar linhas divisórias em excesso']
        }
      ]
    },
    {
      id: 'H2',
      category: 'Hierarquia Informacional',
      shortLabel: 'Hierarquia',
      colour: '#50C878',
      description: 'Organize as informações de acordo com sua relevância e relação, permitindo reconhecer primeiro o cenário geral e avançar progressivamente para níveis mais específicos de análise.',
      example: {
        text: 'Exemplo portuário: indicadores essenciais em área de destaque, seguidos por filtros, tendências e detalhamento por terminal ou embarcação.',
        img: 'img/exemplo-h2-hierarquia.png'
      },
      children: [
        {
          name: 'Indicadores Prioritários em Destaque',
          image: 'img/guidelines/h2-kpis.png',
          description: 'Posicione os indicadores mais relevantes em áreas de alta visibilidade, geralmente na região superior ou inicial do fluxo de leitura.',
          usePara: 'Indicadores críticos como movimentação, espera, ocupação, produtividade, backlog ou nível de serviço.',
          faca: ['Dar maior destaque aos indicadores essenciais', 'Exibir unidade e período junto ao valor', 'Agrupar indicadores relacionados'],
          evite: ['Dar o mesmo peso visual a todos os KPIs', 'Misturar indicadores sem relação', 'Ocupar toda a região superior com métricas secundárias']
        },
        {
          name: 'Progressão Visão Geral → Detalhe',
          image: 'img/guidelines/h2-fluxo.png',
          description: 'Estruture a hierarquia para que a leitura comece pelo cenário geral e avance progressivamente até informações mais específicas, sem misturar níveis de importância.',
          usePara: 'Análises multinível como Porto → Terminal → Berço → Embarcação e visão executiva → análise → registro.',
          faca: ['Organizar níveis do geral para o específico', 'Evidenciar visualmente a mudança de nível', 'Preservar referências que ajudem a compreender o contexto'],
          evite: ['Dar o mesmo peso a visão geral e detalhe', 'Pular níveis sem indicar a mudança de contexto', 'Misturar resumo e registro detalhado no mesmo bloco']
        },
        {
          name: 'Rótulos e Alinhamento',
          image: 'img/guidelines/h2-rotulos.png',
          description: 'Use alinhamento, proximidade e formatação consistente para facilitar comparação e reconhecimento de padrões.',
          usePara: 'Tabelas, listas, KPIs e comparações entre categorias.',
          faca: ['Alinhar rótulos de forma consistente', 'Alinhar números para facilitar comparação', 'Manter unidade próxima do valor'],
          evite: ['Centralizar todos os elementos indiscriminadamente', 'Desalinhar valores comparáveis', 'Separar rótulo e medida em áreas distantes']
        },
        {
          name: 'Agrupamento Visual',
          image: 'img/guidelines/h2-grupo.png',
          description: 'Agrupe informações relacionadas e separe contextos diferentes por proximidade, espaço, fundo ou contorno sutil.',
          usePara: 'Blocos de indicadores, filtros de um mesmo contexto e conjuntos de gráficos relacionados.',
          faca: ['Agrupar métricas relacionadas', 'Usar espaçamento consistente entre grupos', 'Criar blocos com propósito analítico claro'],
          evite: ['Misturar contextos diferentes', 'Criar muitos contêineres visuais desnecessários', 'Usar espaçamento irregular']
        },
        {
          name: 'Estrutura em Camadas ou Abas',
          image: 'img/guidelines/h2-camadas.png',
          description: 'Separe contextos complexos quando uma única tela não comportar adequadamente todos os níveis de informação.',
          usePara: 'Dashboards com diferentes visões de operação, carga, terminal, segurança ou desempenho.',
          faca: ['Manter critérios claros para cada aba ou camada', 'Preservar navegação consistente', 'Manter informações críticas acessíveis'],
          evite: ['Esconder informação essencial em níveis profundos', 'Criar abas sem distinção clara', 'Repetir o mesmo conteúdo em várias telas']
        },
        {
          name: 'Densidade Informacional Controlada',
          image: 'img/guidelines/h2-densidade.png',
          description: 'Controle a quantidade de informação simultânea e distribua o detalhamento de acordo com a prioridade analítica.',
          usePara: 'Dashboards com muitos indicadores, gráficos, filtros ou níveis de detalhamento.',
          faca: ['Priorizar o que precisa ser visto primeiro', 'Levar detalhes secundários para níveis posteriores', 'Evitar duplicação de métricas'],
          evite: ['Exibir tudo ao mesmo tempo', 'Competição visual entre blocos', 'Repetir indicadores sem necessidade']
        }
      ]
    },
    {
      id: 'H3',
      category: 'Usabilidade e Interatividade',
      shortLabel: 'Interação',
      colour: '#9B59B6',
      description: 'Promova interações consistentes, previsíveis e compreensíveis, facilitando a exploração das informações e o reconhecimento dos estados da interface.',
      example: {
        text: 'Exemplo portuário: filtros principais visíveis, seleções ativas identificáveis e resposta clara quando o usuário refina terminal, período ou tipo de carga.',
        img: 'img/exemplo-h3-interacao.png'
      },
      children: [
        {
          name: 'Controles Consistentes',
          image: 'img/guidelines/h3-controles.png',
          description: 'Mantenha filtros, botões, seleções e padrões de navegação com comportamento e posição previsíveis.',
          usePara: 'Filtros, seleções, menus, drill-down e navegação entre visões.',
          faca: ['Reutilizar os mesmos padrões de controle', 'Manter localização previsível', 'Usar rótulos claros para ações'],
          evite: ['Mudar comportamento entre telas', 'Esconder controles recorrentes', 'Usar ícones diferentes para a mesma ação']
        },
        {
          name: 'Feedback de Interação',
          image: 'img/guidelines/h3-feedback.png',
          description: 'Indique visualmente que uma ação foi reconhecida e, quando necessário, informe carregamento, conclusão, erro ou mudança de estado.',
          usePara: 'Filtros, seleções, atualizações, carregamentos e ações de navegação.',
          faca: ['Mostrar seleções ativas', 'Usar indicador de carregamento quando necessário', 'Confirmar ações relevantes'],
          evite: ['Ações sem resposta visual', 'Esperas longas sem indicação', 'Mudanças silenciosas de contexto']
        },
        {
          name: 'Estados Visuais Claros',
          image: 'img/guidelines/h3-estados.png',
          description: 'Diferencie claramente os estados de interação de controles e objetos, tornando reconhecível quando algo está ativo, selecionado, focado ou indisponível.',
          usePara: 'Botões, filtros, tabs, seleções e objetos interativos.',
          faca: ['Combinar cor, contorno, ícone ou texto', 'Manter foco visível', 'Distinguir claramente estado desabilitado'],
          evite: ['Estados ambíguos', 'Usar somente variação de cor', 'Eliminar indicação de foco']
        },
        {
          name: 'Seleções Ativas e Estado do Filtro',
          image: 'img/guidelines/h3-selecoes.png',
          description: 'Mantenha visíveis as seleções que definem o recorte atual da análise e deixe claro como os filtros afetam os indicadores e visualizações exibidos.',
          usePara: 'Filtros de período, terminal, embarcação, tipo de carga, operação e demais seleções que alteram o contexto do dashboard.',
          faca: ['Exibir seleções ativas de forma persistente', 'Informar quantos filtros estão aplicados quando útil', 'Oferecer ação clara para remover uma seleção ou limpar o conjunto'],
          evite: ['Ocultar filtros ativos', 'Alterar o contexto sem sinalização', 'Deixar o usuário sem uma forma simples de desfazer seleções']
        },
        {
          name: 'Filtros no Fluxo de Exploração',
          image: 'img/guidelines/h3-filtros.png',
          description: 'Posicione os filtros de acordo com sua frequência e relação com o conteúdo, tornando claro seu efeito sobre indicadores e visualizações.',
          usePara: 'Filtros de período, terminal, embarcação, tipo de carga, operação ou unidade.',
          faca: ['Manter filtros principais visíveis', 'Indicar seleções ativas', 'Permitir limpar seleções facilmente', 'Agrupar filtros relacionados'],
          evite: ['Filtros desconectados do conteúdo', 'Esconder filtros essenciais', 'Deixar seleções ativas sem indicação']
        },
        {
          name: 'Exploração Intuitiva',
          image: 'img/guidelines/h3-exploracao.png',
          description: 'Torne evidente quais elementos podem ser explorados e ofereça detalhamento sem quebrar desnecessariamente o fluxo analítico.',
          usePara: 'Drill-down, tooltips, seleção em gráficos e detalhamento contextual.',
          faca: ['Indicar o que é clicável', 'Usar tooltips objetivos', 'Preservar o contexto durante o detalhamento'],
          evite: ['Forçar nova tela para toda ação', 'Criar interações escondidas', 'Usar tooltips extensos ou persistentes']
        }
      ]
    },
    {
      id: 'H4',
      category: 'Acessibilidade e Design Universal',
      shortLabel: 'Acessibilidade',
      colour: '#E45D5D',
      transversal: true,
      description: 'Considere a acessibilidade como requisito transversal da interface, contemplando diferentes condições perceptuais, formas de interação e dispositivos de acesso.',
      note: 'No PortoUX, H4 é uma dimensão transversal de qualidade. Sua incorporação decorre dos referenciais de acessibilidade e Design Universal considerados na construção do framework.',
      example: {
        text: 'Exemplo portuário: alertas combinam cor, texto e ícone; controles possuem foco visível; conteúdo permanece legível em diferentes tamanhos de tela.',
        img: 'img/exemplo-h4-acessibilidade.png'
      },
      children: [
        {
          name: 'Redundância à Cor',
          image: 'img/guidelines/h4-redundancia.png',
          description: 'Quando a cor comunicar um estado ou diferença importante, ofereça também outro sinal perceptível, como texto, símbolo, forma, padrão ou posição.',
          usePara: 'Alertas, status, categorias, estados e comparações.',
          faca: ['Combinar cor com símbolo ou texto', 'Manter legendas claras', 'Testar interpretação sem cor'],
          evite: ['Depender apenas de cor', 'Usar símbolos sem significado reconhecível', 'Diferenciar estados apenas por saturação']
        },
        {
          name: 'Tamanho de Alvos e Espaçamento',
          image: 'img/guidelines/h4-alvos.png',
          description: 'Garanta áreas de clique ou toque suficientemente grandes e separadas para reduzir acionamentos acidentais.',
          usePara: 'Botões, filtros, menus, seletores e controles em diferentes dispositivos.',
          faca: ['Usar alvos confortáveis para interação', 'Separar controles próximos', 'Considerar uso em telas menores'],
          evite: ['Botões muito pequenos', 'Controles encostados', 'Ações críticas muito próximas entre si']
        },
        {
          name: 'Navegação por Teclado',
          image: 'img/guidelines/h4-teclado.png',
          description: 'Permita utilizar elementos interativos também por teclado, sem dependência exclusiva do mouse.',
          usePara: 'Todos os controles e elementos interativos.',
          faca: ['Manter ordem de Tab lógica', 'Exibir foco visível', 'Permitir fechar diálogos por teclado'],
          evite: ['Armadilhas de foco', 'Remover contorno de foco sem alternativa', 'Criar componentes acessíveis apenas por mouse']
        },
        {
          name: 'Linguagem Clara',
          image: 'img/guidelines/h4-linguagem.png',
          description: 'Use rótulos, mensagens e instruções diretas, explicando termos técnicos quando necessário.',
          usePara: 'Filtros, mensagens, títulos, instruções e alertas.',
          faca: ['Usar frases curtas', 'Explicar siglas quando necessário', 'Nomear ações de forma objetiva'],
          evite: ['Jargão sem contexto', 'Mensagens ambíguas', 'Rótulos excessivamente abreviados']
        },
        {
          name: 'Paletas Acessíveis',
          image: 'img/guidelines/h4-paletas.png',
          description: 'Escolha combinações cromáticas que continuem distinguíveis em diferentes condições de visão de cores e níveis de contraste.',
          usePara: 'Gráficos com múltiplas séries, categorias e estados.',
          faca: ['Testar paletas com simuladores', 'Combinar diferenças de luminosidade e forma', 'Limitar quantidade de categorias coloridas'],
          evite: ['Usar verde e vermelho como única distinção', 'Paletas muito saturadas', 'Usar cores visualmente próximas sem outro sinal']
        },
        {
          name: 'Design Responsivo',
          image: 'img/guidelines/h4-responsivo-v2.svg',
          description: 'Adapte hierarquia, controles e conteúdo para diferentes tamanhos de tela sem perder legibilidade ou funcionalidade.',
          usePara: 'Desktop, notebook, tablet, celular e displays operacionais.',
          faca: ['Reorganizar conteúdo conforme o espaço', 'Preservar prioridades em telas menores', 'Permitir rolagem quando necessária'],
          evite: ['Apenas reduzir toda a interface proporcionalmente', 'Quebrar tabelas sem alternativa', 'Ocultar informação essencial no mobile']
        }
      ]
    },
    {
      id: 'H5',
      category: 'Contexto Decisório e Comunicação de Dados',
      shortLabel: 'Contexto',
      colour: '#E89A3C',
      description: 'Apresente os dados com contexto suficiente para favorecer sua interpretação, escolhendo representações adequadas ao tipo de informação e tornando explícitos elementos relevantes para sua compreensão.',
      example: {
        text: 'Exemplo portuário: tendência mensal com unidade, período, fonte e anotações de eventos relevantes, combinada a comparações entre terminais.',
        img: 'img/exemplo-h5-contexto.png'
      },
      children: [
        {
          name: 'Contextualização do Indicador',
          image: 'img/guidelines/h5-contexto.png',
          description: 'Apresente informações necessárias para compreender corretamente o valor exibido, incluindo unidade, período, recorte e referência quando aplicável.',
          usePara: 'KPIs, metas, percentuais, tempos, volumes, produtividade e indicadores operacionais.',
          faca: ['Exibir unidade de medida', 'Informar período e recorte', 'Apresentar meta ou referência quando necessária'],
          evite: ['Valores isolados sem unidade', 'Percentuais sem base de comparação', 'Indicadores sem período de referência']
        },
        {
          name: 'Escolha da Representação Visual',
          image: 'img/guidelines/h5-escolha.png',
          description: 'Escolha a representação a partir da pergunta analítica e da relação que precisa ser evidenciada nos dados, priorizando soluções simples e familiares quando comunicarem adequadamente a informação.',
          usePara: 'Comparação, evolução temporal, composição, distribuição, relação, ranking, localização e comparação com referências.',
          faca: ['Começar pela pergunta analítica', 'Relacionar natureza dos dados e representação', 'Preferir a solução mais simples que preserve a mensagem'],
          evite: ['Escolher gráficos apenas pela aparência', 'Usar a mesma representação para relações diferentes', 'Adicionar complexidade sem ganho de interpretação']
        },
        {
          name: 'Gráfico de Linhas — Tendência',
          image: 'img/guidelines/h5-linha-v2.svg',
          description: 'Use linhas para representar evolução de medidas ao longo de uma sequência temporal e facilitar a identificação de padrões, mudanças e pontos relevantes.',
          usePara: 'Movimentação mensal, tempo médio de espera, produtividade ao longo do tempo e séries de ETA.',
          faca: ['Usar escala compatível com a variação analisada', 'Sinalizar cortes ou ajustes de eixo', 'Anotar eventos relevantes quando necessário'],
          evite: ['Usar linha para categorias sem ordem', 'Exibir excesso de séries simultâneas', 'Ocultar a unidade ou o período']
        },
        {
          name: 'Gráfico de Barras — Comparação',
          image: 'img/guidelines/h5-barras.png',
          description: 'Use barras para comparar magnitudes entre categorias discretas, preservando uma escala quantitativa clara.',
          usePara: 'Movimentação por terminal, produtividade por equipamento, volume por grupo de mercadoria ou ranking.',
          faca: ['Iniciar a escala quantitativa em zero', 'Preferir barras horizontais para rótulos longos', 'Ordenar quando isso facilitar a comparação'],
          evite: ['Usar 3D', 'Truncar a escala sem indicação', 'Criar categorias demais sem agrupamento']
        },
        {
          name: 'Gráfico de Dispersão — Relação',
          image: 'img/guidelines/h5-dispersao-v2.svg',
          description: 'Use dispersão para explorar relações entre duas medidas quantitativas e identificar agrupamentos, padrões ou valores atípicos.',
          usePara: 'Tempo de permanência × volume movimentado, produtividade × ocupação ou outras relações entre medidas.',
          faca: ['Identificar unidades nos eixos', 'Destacar outliers quando relevantes', 'Usar cor ou tamanho adicional apenas com propósito claro'],
          evite: ['Interpretar correlação como causalidade', 'Sobrepor pontos sem tratamento quando houver grande densidade', 'Usar para variáveis categóricas simples']
        },
        {
          name: 'Composição e Proporção',
          image: 'img/guidelines/h5-composicao-v2.svg',
          description: 'Use representações de parte-todo quando o objetivo for compreender como poucas categorias compõem um total significativo.',
          usePara: 'Participação por tipo de carga, modal, terminal ou natureza da operação em um período definido.',
          faca: ['Usar poucas categorias claramente distinguíveis', 'Exibir valores ou percentuais quando relevantes', 'Preferir barras 100% empilhadas quando houver comparação entre vários grupos'],
          evite: ['Usar muitas fatias em gráficos de rosca ou pizza', 'Comparar vários totais por meio de pizzas', 'Exibir percentuais sem informar o total ou período']
        },
        {
          name: 'Tabela para Detalhamento',
          image: 'img/guidelines/h5-tabela.png',
          description: 'Use tabelas quando a tarefa exigir consulta de valores exatos, múltiplos atributos ou detalhamento registro a registro.',
          usePara: 'Detalhamento por embarcação, terminal, operação, mercadoria, ocorrência ou período.',
          faca: ['Priorizar colunas relevantes', 'Alinhar valores numéricos', 'Permitir ordenação e filtros quando necessários'],
          evite: ['Transformar a tabela em primeira opção para toda análise', 'Exibir colunas sem uso', 'Usar texto truncado sem alternativa de consulta']
        },
        {
          name: 'Narrativa e Anotações',
          image: 'img/guidelines/h5-narrativa.png',
          description: 'Use títulos, rótulos e anotações para destacar acontecimentos que ajudam a interpretar picos, quedas, desvios ou mudanças no contexto.',
          usePara: 'Eventos climáticos, indisponibilidades, greves, mudanças de operação ou ocorrências que alteram o comportamento dos indicadores.',
          faca: ['Anotar apenas eventos relevantes', 'Manter texto próximo ao dado relacionado', 'Usar títulos que expressem a mensagem principal'],
          evite: ['Sobrecarregar o gráfico com textos', 'Usar anotações genéricas', 'Separar explicação e dado em áreas distantes']
        },
        {
          name: 'Atualidade, Fonte e Incerteza',
          image: 'img/guidelines/h5-fonte.svg',
          description: 'Torne visível quando o dado foi atualizado, de onde veio e, quando aplicável, seu nível de incerteza, estimativa ou incompletude.',
          usePara: 'ETA, previsões, integrações em tempo real, dados de sensores e informações consolidadas de diferentes fontes.',
          faca: ['Exibir última atualização quando relevante', 'Informar fonte', 'Sinalizar estimativas, imputações ou faixas de previsão'],
          evite: ['Apresentar previsão como valor certo', 'Ocultar dados desatualizados', 'Omitir limitações relevantes da informação']
        }
      ],
      visualGuide: true
    }
  ]
};
