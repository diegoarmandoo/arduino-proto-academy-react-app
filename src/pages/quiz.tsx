import React from 'react';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { BorderlessLight } from "survey-core/themes";
import { Model, Serializer, surveyLocalization } from "survey-core";
import 'survey-core/survey.i18n';


const ptBrlocale = surveyLocalization.locales["pt-br"];
ptBrlocale.pagePrevText = "Anterior";
ptBrlocale.pageNextText = "Próxima";
ptBrlocale.completeText = "Finalizar";

const quizQuestions = {
    title: "QUIZ",
    logoPosition: "right",
    showProgressBar: "top",
    showTimer:true,
    timerLocation:"top",
    completedHtmlOnCondition: [{
        expression: "{totalScore} = 10",
        html: "<p class='text-lg'>Você conseguiu {totalScore} de {maxScore} pontos.</p></br></br>🥳 Parabéns! Você foi ótimo!"
    }, {
        expression: "{totalScore} >= 7",
        html:"Você conseguiu {totalScore} de {maxScore} pontos.</br></br>👏 Muito bem! Você passou no teste."
    }, {
        expression: "{totalScore} <= 6",
        html:"Você conseguiu {totalScore} de {maxScore} pontos.</br></br>👏 Eita!! Tente novamente para melhorar a pontuação."
    }],
    pages: [
        {
            name: "startPage",
            elements: [
                {
                type: "html",
                name: "Bem vindo",
                html:`
                   <b>Bem Vindos ao Quiz sobre Protipação com Arduino e Outros Componentes</b>
                `
                }
            ]
        },
        {
            name: "page1",
            elements: [
                {
                    type: "radiogroup",
                    name: "question1",
                    title: "O que é Prototipação?",
                    choices: [
                       
                        {
                            value:'processo-decorativo',
                            text:'Processo de criar desenhos de um produto apenas para fins decorativos.'
                        },
                        {
                            value:'processo-reciclar',
                            text:'Processo de reciclar materiais para reduzir o desperdício.'
                        },
                        {
                            value:'processo-rascunho',
                            text:'Processo de criar uma versão inicial (rascunho) de algo para testar e melhorar antes do produto final.'
                        },
                        {
                            value:'tipo-programacao',
                            text:'Tipo de programação para criar jogos no computador.'
                        }
                    ],
                    correctAnswer: "processo-rascunho",
                    isRequired: true,
                    score: 1
                }
            ]
        },
        {
            name: "page2",
            elements: [
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "Qual é o componente número 1, destacado em vermelho?",
                    description: "De acordo com a imagem do lado direito",
                    choices: ["Módulo Bluetooht", "Conector DC", "Placa Arduino (PCB)","Leds"],
                    correctAnswer: "Placa Arduino (PCB)",
                    isRequired: true,
                    score: 1
                },
                {
                    type: "html",
                    name: "htm02",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/01.png"  class="w-[75%]" />`,
                }
            ]
        },
        {
            name: "page3",
            elements: [
                {
                    type: "boolean",
                    name: "question3",
                    title: "O componente número 2, destacado em vermelho, é o Conector DC do arduino?",
                    description: "De acordo com a imagem do lado direito",
                    valueTrue: "Sim",
                    valueFalse: "Não",
                    correctAnswer: "Não",
                    isRequired: true,
                    score: 1
                },
                {
                    type: "html",
                    name: "htm03",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/02.png" class="w-[75%]" />`,
                }
            ]
        },
        {
            name: "page4",
            elements: [
                {
                    type: "radiogroup",
                    name: "question4",
                    title: "Qual é o componente número 3, destacado em vermelho?",
                    description: "De acordo com a imagem do lado direito",
                    choices: ["Microcontrolador  (ATmega328P)", "Botão Reset", "Conector USB - Tipo B","Portas de Entrada/Saída Digitais"],
                    correctAnswer: "Portas de Entrada/Saída Digitais",
                    isRequired: true,
                    score: 1
                },
                {
                    type: "html",
                    name: "htm04",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/03.png" alt="Image for question 1" class="w-[75%]"  />`,
                }
            ]
        },
        {
            name: "page5",
            elements: [
                {
                    type: "radiogroup",
                    name: "question5",
                    title: "Qual é o componente número 4, destacado em vermelho?",
                    description: "De acordo com a imagem do lado direito",
                    choices: ["Microcontrolador  (ATmega328P)", "Conector DC" , "Conectores de Alimentação e Portas de Entradas Analógicas" ,"Botão Reset"],
                    correctAnswer: "Microcontrolador  (ATmega328P)",
                    isRequired: true,
                    score: 1
                },
                {
                    type: "html",
                    name: "htm05",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/04.png" alt="Image for question 1" class="w-[75%]"  />`,
                }
            ]
        },
        {
            name: "page6",
            elements: [
                {
                    type: "radiogroup",
                    name: "question6",
                    title: "Qual a função do componente Conector DC, indicado pelo número 5 e destacado em vermelho?",
                    description: "De acordo com a imagem do lado direito",
                    isRequired: true,
                    score: 1,
                    choices: [
                        {
                            value: "controlar-operacoes",
                            text: "Controlar todas as operações e interações dos periféricos."
                        },
                        {
                            value: "suportar-fisicamente",
                            text: "Suportar fisicamente e conectar eletricamente os componentes, garantindo sua comunicação eficiente e estável"
                        },
                        {
                            value: "fornecer-energia",
                            text: "Fornecer energia ao Arduino quando não se utiliza a conexão USB, permitindo que a placa funcione de forma autônoma"
                        },
                        {
                            value: "facilitar-programacao",
                            text: "Facilitar a programação e comunicação com o Arduino."
                        }
                    ],
                    correctAnswer: "fornecer-energia"
                },
                {
                    type: "html",
                    name: "htm06",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/05.png" alt="Image for question 1" class="w-[75%]"  />`,
                }
            ]
        },
        {
            name: "page7",
            elements: [
                {
                    type: "boolean",
                    name: "question7",
                    title: "O componente número 6, destacado em vermelho, é o Conector USB - Tipo B do arduino?",
                    description: "De acordo com a imagem do lado direito",
                    valueTrue: "Sim",
                    valueFalse: "Não",
                    correctAnswer: "Sim",
                    isRequired: true,
                    score: 1
                },
                {
                    type: "html",
                    name: "htm07",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/06.png" alt="Image for question 1" class="w-[75%]"  />`,
                }
            ]
        },
        {
            name: "page8",
            elements: [
                {
                    type: "radiogroup",
                    name: "question8",
                    title: "Qual a função do componente Botão Reset, indicado pelo número 5 e destacado em vermelho?",
                    description: "De acordo com a imagem do lado direito",
                    isRequired: true,
                    score: 1,
                    choices: [
                        {
                            value: "fornecer-energia",
                            text: "Fornecer energia ao Arduino quando não se utiliza a conexão USB, permitindo que a placa funcione de forma autônoma"
                        },
                        {
                            value: "reiniciar-programacao",
                            text: "Reiniciar a execução do programa carregado."
                        },
                        {
                            value: "suportar-fisicamente",
                            text: "Suportar fisicamente e conectar eletricamente os componentes, garantindo sua comunicação eficiente e estável"
                        },
                        {
                            value: "permtir-interacao",
                            text: "Permitir a interação com o ambiente externo e Garantir que a placa Arduino receba a energia necessária para operar."
                        }
                    ],
                    correctAnswer: "reiniciar-programacao"
                },
                {
                    type: "html",
                    name: "htm08",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/07.png" alt="Image for question 1" class="w-[75%]"  />`,
                }
            ]
        },
        {
            name: "page9",
            elements: [
                {
                    type: "radiogroup",
                    name: "question9",
                    title: "Qual a categoria do dispositivo Sensor Ultrassônico (HC-SR04)?",
                    description: "Ver imagem do lado direito",
                    isRequired: true,
                    score: 1,
                    choices: [
                        {
                            value: "modulo-comunicacao",
                            text: "Módulo de Comunicação"
                        },
                        {
                            value: "dispositivo-entrada",
                            text: "Dispositivo de Entrada"
                        },
                        {
                            value: "dispositivo-saida",
                            text: "Dispositivo de Saída"
                        },
                        {
                            value: "fonte-alimentacao",
                            text: "Fonte de Alimentação"
                        }
                    ],
                    correctAnswer: "dispositivo-entrada"
                },
                {
                    type: "html",
                    name: "htm09",
                    startWithNewLine: false,
                    html: `<img src="/src/assets/08.png" alt="Image for question 1" class="w-[75%]"  />`,
                }
            ]
        },
        {
            name: "page10",
            elements: [
                {
                    type: "radiogroup",
                    name: "question10",
                    title: "O que são os dispositivos de saída?",
                    description: "Ver imagem do lado direito",
                    isRequired: true,
                    score: 1,
                    choices: [
                        {
                            value: "modulos-comunicacao",
                            text: "São módulos que permitem que o Arduino se comunique com outros dispositivos, computadores ou redes"
                        },
                        {
                            value: "dispositivos-entrada",
                            text: "São componentes que permitem ao Arduino receber informações do ambiente externo ou da interação do usuário"
                        },
                        {
                            value: "dispositivos-saida",
                            text: "São componentes que permitem ao Arduino enviar informações ao ambiente externo ou execute ações"
                        },
                        {
                            value: "fontes-alimentacao",
                            text: "São componentes são responsáveis ​​por fornecer energia ao Arduino e outros componentes"
                        }
                    ],
                    correctAnswer: "dispositivos-saida"
                }
            ]
        }
    ],
    firstPageIsStarted: true
};

Serializer.addProperty("question", {
  name: "score:number"
});

const Quiz: React.FC = () => {

    const surveyModel = new Model(quizQuestions);
    surveyModel.applyTheme(BorderlessLight);
    surveyModel.locale = "pt-br";

    surveyModel.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    
    function calculateMaxScore(questions:any) {
        var maxScore = 0;
        questions.forEach((question: any) => {
          if (!!question.score) {
            maxScore += question.score;
          }
        });
        return maxScore;
    }

    function calculateTotalScore(data: any) {
        var totalScore = 0;
        Object.keys(data).forEach((qName) => {
            const question = surveyModel.getQuestionByName(qName);
            if (question.isAnswerCorrect()) {
                if (!!question.score) {
                    totalScore += question.score;
                }
            }
        });
        return totalScore;
    }

    surveyModel.onCompleting.add((sender, options) => {
        const totalScore = calculateTotalScore(sender.data);
        const maxScore = calculateMaxScore(sender.getAllQuestions());
        
        // Save the scores in survey results
        sender.setValue("maxScore", maxScore);
        sender.setValue("totalScore", totalScore);
    });


    return (
      <div className="flex-1 flex h-[80vh]"  style={{ overflowY: 'auto' }}>
            <Survey model={surveyModel} /> 
      </div>
    );
};

export default Quiz;
