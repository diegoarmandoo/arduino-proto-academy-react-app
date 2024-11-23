interface HighlightObject {
    nodeID: number;
    MaterialHLIndex: number;
    OriginalMaterialID: string;
}

export interface Annotation {
    title: string;
    description: string;
    position: [number, number, number];
    initialCameraPosition: [number, number, number];
    initialTargetPosition: [number, number, number];
    highlight: Array<HighlightObject>;
}
  
interface Model3DAnnotations {
    [modelID: string]: Annotation[];
}

export const model3DAnnotations: Model3DAnnotations = {
    '943bae9bb86842408fc718b6e4c92ddb': [
        {
            title: 'Placa Arduino',
            description: `
                <b>Descrição: </b>A placa de circuito impresso (PCB) é a estrutura física que interliga todos os componentes eletrônicos do Arduino através de trilhas condutoras. 
                É feita de material isolante com camadas de cobre.
                <br>
                <br>
                <b>Objetivo: </b> Suportar fisicamente e conectar eletricamente os componentes, garantindo sua comunicação eficiente e estável.
            `,
            position: [-4055.714214060992, 5870.449019632528, -0.00017729980658466187],
            initialCameraPosition: [-1950.549910666325, 3066.013078938247, 10068.449392919954],
            initialTargetPosition: [-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [{nodeID:2058,MaterialHLIndex:16,OriginalMaterialID:"c04e6bf0-45df-4d89-bf03-5e1861690f7a"}]
        },
        {
            title: 'Conectores de Alimentação e Portas de Entradas Analógicas',
            description: `
                <b>Conectores de Alimentação (POWER): </b>São interfaces para fornecer energia ao Arduino.
                <br>
                <br>
                <b>Objetivo: </b> Garantir que a placa Arduino receba a energia necessária para opera.
                <hr>
                <b>Portas de Entradas Analógicas (ANALOG IN): </b>Conjunto de pinos analógicos para comunicação com sensores e atuadores .
                <br>
                <br>
                <b>Objetivo: </b> Permitir a interação com o ambiente externo.
            `,
            position: [-238.87313112148604, 4677.20328842614, 881.9321043005857],
            initialCameraPosition: [4550.721662696416, 3452.058841225672, 7409.193414802139],
            initialTargetPosition: [-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [{nodeID:213,MaterialHLIndex:16,OriginalMaterialID:"39fcf0ac-30b5-435c-87cc-7959ddf06cb8"}]
        },
        {
            title: 'Portas de Entradas/Saídas Digitais',
            description: `
                <b>Descrição: </b>Conjunto de pinos digitais para comunicação com sensores e atuadores .
                <br>
                <br>
                <b>Objetivo: </b> Permitir a interação com o ambiente externo.
            `,
            position: [-5012.486245343494, 4370.182300197192, 878.9320934847419],
            initialCameraPosition: [-10472.357289017395, 4782.534137267202, 5157.971844807743],
            initialTargetPosition: [-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [
                {nodeID:100,MaterialHLIndex:16,OriginalMaterialID:"39fcf0ac-30b5-435c-87cc-7959ddf06cb8"},
                {nodeID:163,MaterialHLIndex:16,OriginalMaterialID:"39fcf0ac-30b5-435c-87cc-7959ddf06cb8"}
            ]
        },
        {
            title: 'Microcontrolador (ATmega328P)',
            description: `
                <b>Descrição: </b>Processador principal responsável pela execução do código.
                <br>
                <br>
                <b>Objetivo: </b> Controlar todas as operações e interações dos periféricos.
            `,
            position:[-1546.4961883616138, 5521.074420251172, 838.0007931324725],
            initialCameraPosition: [-4194.303830206077, 3093.9187972177633, 9855.770123234819],
            initialTargetPosition: [-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [
                {nodeID:1626,MaterialHLIndex:16,OriginalMaterialID:"a3923eec-62bd-474b-8e53-cb89961ecf9c"},
                {nodeID:1616,MaterialHLIndex:16,OriginalMaterialID:"e6936884-3d33-4456-8d8b-9910fe4b0058"}
            ]
        },
        {
            title: 'Conector DC',
            description: `
                <b>Descrição: </b>É um conector de alimentação que permite conectar uma fonte de alimentação externa de corrente contínua (DC).
                <br>
                <br>
                <b>Objetivo: </b> Fornecer energia ao Arduino quando não se utiliza a conexão USB, permitindo que a placa funcione de forma autônoma.
            `,
            position:[-553.1986545797163, -42.141073777217, 1099.9203108678712],
            initialCameraPosition: [1791.0076907271045, -5357.395464809342, 3367.5504629956754],
            initialTargetPosition: [-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [
                {nodeID:271,MaterialHLIndex:16,OriginalMaterialID:"e6936884-3d33-4456-8d8b-9910fe4b0058"}
            ]
        },
        {
            title: 'Conector USB - Tipo B',
            description: `
                <b>Descrição: </b>Interface para carregar o código e comunicação serial com o computador.
                <br>
                <br>
                <b>Objetivo: </b>  Facilitar a programação e comunicação com o Arduino.
            `,
            position:[-3473.809018748073, -231.25903814724046, 1104.9988369873822],
            initialCameraPosition: [-2811.275444987762, -6166.750640355018, 3500.0879407570355],
            initialTargetPosition: [-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [
                {nodeID:319,MaterialHLIndex:16,OriginalMaterialID:"932bdb5c-a6db-447f-a8e7-ce834dd1f175"}
            ]
        },
        {
            title: 'Botão de Reset',
            description: `
                <b>Descrição: </b> Permite reiniciar o microcontrolador.
                <br>
                <br>
                <b>Objetivo: </b> Reiniciar a execução do programa carregado.
            `,
            position:[-4882.3229365555635, 667.9183513166336, 307.51875879346085],
            initialCameraPosition:[-8592.139252642519, -2778.3209378544702, 6716.356280057323],
            initialTargetPosition:[-2153.6364701022503, 3064.895129171144, 267.0780510060803],
            highlight: [
                {nodeID:924,MaterialHLIndex:16,OriginalMaterialID:"32edebe5-31dd-459f-8263-5e180da77e60"},
                {nodeID:948,MaterialHLIndex:16,OriginalMaterialID:"932bdb5c-a6db-447f-a8e7-ce834dd1f175"}
            ]
        }
    ],
    'a3b67619409343c49e80012a81762653': [
        {
            title: 'Módulo Bluetooth (HC-05)',
            description: `
                <b>Descrição: </b> Pequena Placa com 06 Pinos. Pode ser  conectada na placa do arduino.
                <br>
                <br>
                <b>Objetivo: </b> Responsável pela troca de informação entre o arduino e outro aparelho com bluetooth como por exemplo um celular.
            `,
            position: [0.16113014362468034, -0.014562590688362935, 0.41607036230700883],
            initialCameraPosition: [-0.000855310982520879, -1.5356601822017288, 0.42090927968969555],
            initialTargetPosition: [-0.0008553109825318178, -0.022234320763397337, -0.07083259147987364],
            highlight: [{nodeID:99999,MaterialHLIndex:16,OriginalMaterialID:""}]
        }
    ],
    'd3bb5dfd2b4e44e4b2bffb35cc207ae7': [
        {
            title: 'Placa de Prototipação (Protoboard)',
            description: `
                <b>Descrição: </b> Também conhecida como placa de ensaio ou contato, possui furos que se comunicam internament de forma horizontal e vertical. 
                <br>
                <br>
                <b>Objetivo: </b> Permite a montagem de circuitos experimentais que podem ser desmontados e/ou alterados dependendo da necessidade do projeto.
            `,
            position: [0.8822930030462052, -0.07171806710714956, 0.6390452926246994],
            initialCameraPosition: [9.04305212503323, 6.837365308736142, 8.354993193575172],
            initialTargetPosition: [-0.0011124923, -0.0299409811, 0.6040591229],
            highlight: [{nodeID:99999,MaterialHLIndex:16,OriginalMaterialID:""}]
        }
    ],
    'f82080d1a0d34a049e048c8fcfbcdc89': [
        {
            title: 'Sensor Ultrassônico (HC-SR04)',
            description: `
                <b>Descrição: </b> Dispositivos de Entrada. É um sensor de proximidade que mede a distância até um objeto usando ondas sonoras ultrassônicas.
                <br>
                <br>
                <b>Função: </b> O sensor envia um pulso ultrassônico (onda sonora) e escuta o eco. Ao medir o tempo que o eco leva para retornar, ele calcula a distância até um objeto.
                <br>
                <br>
                <b>Uso: </b> Detecção de obstáculos (em robótica), Medição de distância (variando de 2 cm a 4 metros). Detecção de nível (em contêineres, tanques, etc.).
            `,
            position: [
                0.000495339395443955,  
                0.0019740399438887835, -0.002145359298556455],
            initialCameraPosition: [-0.005979822384186594, -0.11951814688600393, 0.021487972756475557],
            initialTargetPosition:  [-0.0032205321407020957, -0.005391559933431249, -0.000927171930634321],
            highlight: [{nodeID:99999,MaterialHLIndex:16,OriginalMaterialID:""}]
        }
    ]
};


