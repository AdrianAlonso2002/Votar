// Banco de preguntas detalladas, pedagógicas y desglosadas por temáticas
const QUESTIONS = [
  {
    id: 1,
    category: "Derechos y Bioética",
    topic: "Aborto y Derechos Reproductivos",
    statement: "¿Cuál debería ser el marco legal y sanitario para la interrupción voluntaria del embarazo (aborto) en España?",
    contextNote: "<strong>Contexto legal:</strong> En España la ley actual permite el aborto libre hasta las 14 semanas en la sanidad pública, y a jóvenes de 16 y 17 años sin consentimiento paterno. En el debate público conviven posturas que van desde blindar el aborto como derecho constitucional público e irrestricto, hasta restringirlo por plazos o causas médicas, o prohibirlo por considerarlo la eliminación de una vida humana en gestación.",
    options: [
      {
        value: 5,
        label: "Derecho 100% público, libre y accesible sin tutelas",
        emoji: "🟢",
        explanation: "Usted defiende que el aborto es un derecho fundamental irrenunciable sobre el propio cuerpo de la mujer, que debe garantizarse íntegramente en la sanidad pública y en todas las provincias, permitiendo el acceso libre a jóvenes de 16 y 17 años sin necesidad de autorización parental."
      },
      {
        value: 4,
        label: "Regulado por plazos en sanidad pública, con acompañamiento a menores",
        emoji: "🌱",
        explanation: "Usted apoya la ley de plazos en la red sanitaria pública para mayores de edad, pero considera conveniente que en el caso de las jóvenes menores de edad exista información, tutela o consentimiento de sus padres o tutores legales."
      },
      {
        value: 3,
        label: "Permitido por ley, pero con mayor peso privado/concertado y objeción médica",
        emoji: "⚖️",
        explanation: "Usted acepta que el aborto sea legal para evitar la clandestinidad, pero prefiere que se gestione principalmente en clínicas acreditadas privadas o concertadas sin sobrecargar la sanidad pública, respetando escrupulosamente la objeción de conciencia de los médicos."
      },
      {
        value: 2,
        label: "Ley de supuestos extraordinarios (no como derecho general)",
        emoji: "🍂",
        explanation: "Usted no concibe el aborto como un método de planificación ni un derecho libre; solo lo admitiría en casos muy excepcionales y comprobados: riesgo grave para la salud de la madre, malformaciones fetales severas o embarazos fruto de una violación."
      },
      {
        value: 1,
        label: "Postura provida: protección de la vida desde la concepción",
        emoji: "🔴",
        explanation: "Usted sostiene que la vida humana comienza con la fecundación y tiene derecho a la protección legal; prohibiría el aborto y sustituiría esas políticas por ayudas económicas directas a la maternidad y apoyo a las familias para recuperar la natalidad."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 5.0,
      psoe: 4.5,
      pp: 2.6,
      vox: 1.0,
      salf: 1.4
    },
    axisWeight: { eco: 0, soc: -1.0 }
  },
  {
    id: 2,
    category: "Derechos y Bioética",
    topic: "Eutanasia y Muerte Asistida",
    statement: "¿Cómo debe regular el Estado la ayuda médica para morir (eutanasia) en personas con enfermedades graves o incurables?",
    contextNote: "<strong>Contexto legal:</strong> España aprobó en 2021 la Ley de Eutanasia, que permite a pacientes con una enfermedad grave e incurable o un sufrimiento crónico e incapacitante solicitar la prestación de ayuda para morir en la sanidad pública tras varias revisiones médicas. Quienes se oponen defienden que la prioridad moral y médica debe ser un Plan Nacional de Cuidados Paliativos que garantice no sufrir dolor sin provocar la muerte activa.",
    options: [
      {
        value: 5,
        label: "Derecho individual garantizado y agilizado en la sanidad pública",
        emoji: "🟢",
        explanation: "Usted considera la muerte digna un derecho individual soberano: el Estado debe garantizar la eutanasia en hospitales públicos con rapidez, eliminando trabas burocráticas o comisiones excesivas que retrasen la decisión del paciente que sufre."
      },
      {
        value: 4,
        label: "A favor de la eutanasia, pero con controles médicos muy rigurosos",
        emoji: "🌱",
        explanation: "Usted aprueba que exista la opción de la eutanasia para casos incurables irreversibles, pero exige un protocolo estricto con segundas opiniones médicas y plazos de reflexión para certificar que la voluntad del paciente es totalmente libre y lúcida."
      },
      {
        value: 3,
        label: "Priorizar cuidados paliativos integrales antes de recurrir a la eutanasia",
        emoji: "⚖️",
        explanation: "Usted cree que la prioridad urgente de los presupuestos sanitarios debe ser llegar al 100% de la población con unidades avanzadas de cuidados paliativos y sedación terminal para calmar el dolor, dejando la eutanasia solo como último recurso residual."
      },
      {
        value: 2,
        label: "Objeción de conciencia amplia y dudas éticas sobre la muerte provocada",
        emoji: "🍂",
        explanation: "Usted tiene serias reticencias éticas con que la medicina tenga como función provocar la muerte; defiende el derecho total del personal sanitario a negarse a practicarla y prefiere reforzar la ayuda a dependientes en lugar de facilitar el fallecimiento."
      },
      {
        value: 1,
        label: "Derogación de la eutanasia: el deber médico es cuidar, nunca provocar la muerte",
        emoji: "🔴",
        explanation: "Usted rechaza de plano la eutanasia y pide su derogación legal inmediata; defiende que la vida debe protegerse hasta su fin natural y que el Estado debe invertir exclusivamente en cuidados paliativos humanos y acompañamiento familiar."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 5.0,
      psoe: 4.6,
      pp: 2.2,
      vox: 1.0,
      salf: 1.3
    },
    axisWeight: { eco: 0, soc: -0.9 }
  },
  {
    id: 3,
    category: "Igualdad y Justicia",
    topic: "Violencia de Género vs. Violencia Intrafamiliar",
    statement: "¿Qué modelo legal debe aplicarse ante las agresiones cometidas en el ámbito de la pareja y la familia?",
    contextNote: "<strong>Contexto legal explicado:</strong><br>• <em>Ley de Violencia de Género (2004):</em> Considera que la violencia ejercida por el hombre sobre su pareja mujer responde a una desigualdad estructural machista. Establece juzgados especializados exclusivos, agravantes penales para el varón agresor y recursos específicos para la mujer.<br>• <em>Propuesta de Ley de Violencia Intrafamiliar:</em> Propone unificar todas las agresiones dentro del hogar en una sola ley neutra: castigar con idénticas penas cualquier violencia (hombre a mujer, mujer a hombre, hacia niños o ancianos), eliminando la distinción penal por razón de sexo y los tribunales específicos para varones.",
    options: [
      {
        value: 5,
        label: "Reforzar la Ley de Violencia de Género con más recursos y perspectiva de género",
        emoji: "🟢",
        explanation: "Usted defiende que el machismo es una causa estructural específica de agresión a las mujeres que exige juzgados especializados, agravantes penales concretos para el hombre agresor, formación feminista obligatoria para jueces y dotación presupuestaria prioritaria."
      },
      {
        value: 4,
        label: "Mantener la Ley de Violencia de Género, mejorando la protección a los hijos",
        emoji: "🌱",
        explanation: "Usted apoya mantener el marco legal de violencia de género protegiendo a la mujer víctima, pero pide mejorar los protocolos policiales, evitar fallos de valoración del riesgo y proteger mejor a los menores involucrados en el entorno familiar."
      },
      {
        value: 3,
        label: "Mantener la protección a la mujer, pero revisar la presunción de inocencia del hombre",
        emoji: "⚖️",
        explanation: "Usted condena enérgicamente cualquier agresión machista, pero le preocupa que denuncias falsas o instrumentales en divorcios conflictivos perjudiquen a hombres inocentes o a la custodia de sus hijos, pidiendo mayores garantías procesales."
      },
      {
        value: 2,
        label: "Evolucionar hacia una Ley Intrafamiliar que proteja a todos los miembros por igual",
        emoji: "🍂",
        explanation: "Usted cree que la ley debe proteger a cualquier víctima en el hogar por igual (ancianos, niños, hombres o mujeres) sin juzgados especiales por sexo, castigando la gravedad del daño cometido con independencia de quién sea el agresor."
      },
      {
        value: 1,
        label: "Derogación total de la Ley de Género por considerarla asimétrica e ideológica",
        emoji: "🔴",
        explanation: "Usted exige derogar la Ley de Violencia de Género por considerar que vulnera la igualdad constitucional ante la ley y la presunción de inocencia del varón; pide sustituirla íntegramente por una Ley de Violencia Intrafamiliar que no distinga entre géneros."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 5.0,
      psoe: 4.4,
      pp: 2.6,
      vox: 1.0,
      salf: 1.0
    },
    axisWeight: { eco: 0, soc: -1.0 }
  },
  {
    id: 4,
    category: "Inmigración y Soberanía",
    topic: "Control Migratorio, Arraigo y Fronteras",
    statement: "¿Qué política debe adoptar España respecto a la inmigración irregular, las fronteras y los permisos de residencia?",
    contextNote: "<strong>Contexto legal:</strong> En España existe debate entre quienes defienden regularizaciones extraordinarias para personas que ya trabajan y viven aquí (arraigo), visados laborales y acogida humanitaria en cooperación con la UE, y quienes exigen endurecer las fronteras de Ceuta y Melilla, expulsar de inmediato a quienes ingresen sin visado y vincular estrictamente los derechos sociales y la nacionalidad al cumplimiento riguroso de la ley.",
    options: [
      {
        value: 5,
        label: "Cierre estricto, deportación inmediata de irregulares y prioridad nacional en ayudas",
        emoji: "🟢",
        explanation: "Usted pide bloqueo y custodia militar en fronteras, expulsión inmediata de todo inmigrante que entre ilegalmente, fin absoluto de las regularizaciones y destinar las ayudas sociales y vivienda pública prioritariamente a ciudadanos españoles."
      },
      {
        value: 4,
        label: "Control fronterizo riguroso, contratos en origen y expulsión de delincuentes",
        emoji: "🌱",
        explanation: "Usted defiende una inmigración ordenada vinculada a un contrato de trabajo previo, una estricta persecución de las mafias de tráfico humano y la expulsión legal inmediata de aquellos extranjeros que cometan delitos graves o reiterados."
      },
      {
        value: 3,
        label: "Inmigración adaptada a las necesidades económicas y demográficas de España",
        emoji: "⚖️",
        explanation: "Usted considera la inmigración necesaria para sostener las pensiones y cubrir puestos vacantes en el campo o la hostelería, pero pide regularla con criterios técnicos y equilibrio, sin caer en descontrol ni en mensajes de hostilidad."
      },
      {
        value: 2,
        label: "Regularización por arraigo de quienes ya trabajan y vías legales seguras",
        emoji: "🍂",
        explanation: "Usted apoya regularizar documentalmente a los inmigrantes que ya viven, pagan impuestos o trabajan en la economía sumergida en España, habilitando vías diplomáticas de visado seguro y cooperación al desarrollo en África y Latinoamérica."
      },
      {
        value: 1,
        label: "Libre circulación, cierre de los CIEs y papeles para todos los residentes",
        emoji: "🔴",
        explanation: "Usted defiende que ningún ser humano es ilegal: pide cerrar los Centros de Internamiento de Extranjeros (CIE), reconocer plenos derechos de ciudadanía y sufragio a cualquier persona residente y agilizar el asilo humanitario sin trabas burocráticas."
      }
    ],
    partyWeights: {
      vox: 5.0,
      salf: 5.0,
      pp: 4.1,
      psoe: 2.2,
      sumar: 1.4,
      podemos: 1.0
    },
    axisWeight: { eco: 0.2, soc: 1.0 }
  },
  {
    id: 5,
    category: "Vivienda y Seguridad",
    topic: "Okupación Ilegal de Inmuebles",
    statement: "¿Qué medidas legales y policiales deben aplicarse frente a la okupación de viviendas y locales?",
    contextNote: "<strong>Contexto legal explicado:</strong><br>• <em>Allanamiento de morada:</em> Entrar en la vivienda habitual o segunda residencia de alguien (ya es delito grave con desalojo policial inmediato).<br>• <em>Usurpación:</em> Ocupar inmuebles deshabitados, pisos de bancos o propiedades vacías. La ley actual exige un procedimiento judicial que puede demorarse meses. El debate enfrenta a quienes exigen desalojos policiales exprés en 24-48h sin esperar juicio civil, frente a quienes advierten que se debe distinguir entre mafias organizadas y familias en extrema exclusión social.",
    options: [
      {
        value: 5,
        label: "Desalojo policial exprés en 24 horas y cárcel efectiva para los okupas",
        emoji: "🟢",
        explanation: "Usted exige tolerancia cero: autorizar a la policía a desalojar cualquier inmueble ocupado sin título legal en un plazo máximo de 24 horas por la fuerza, tipificar penas de prisión y endurecer el castigo a las mafias organizadas."
      },
      {
        value: 4,
        label: "Agilizar los plazos judiciales civiles y proteger la seguridad jurídica del propietario",
        emoji: "🌱",
        explanation: "Usted apoya una reforma procesal rápida para que los juzgados puedan ordenar la recuperación de la vivienda en pocos días, garantizando al propietario que no asumirá los costes ni el pago de suministros de quienes ocupan su bien."
      },
      {
        value: 3,
        label: "Diferenciar con claridad entre mafias de usurpación y familias vulnerables",
        emoji: "⚖️",
        explanation: "Usted pide actuar con firmeza contra las mafias delictivas que extorsionan o alquilan pisos ilegalmente, pero asegurando que los servicios sociales intervengan previamente si hay menores o ancianos en situación real de desamparo."
      },
      {
        value: 2,
        label: "Prohibir desahucios sin alternativa habitacional digna previa",
        emoji: "🍂",
        explanation: "Usted sostiene que el fenómeno de la okupación está inflado mediáticamente por intereses de empresas de alarmas y que el Estado no puede desalojar a personas pobres a la calle sin que el ayuntamiento o comunidad les proporcione un techo antes."
      },
      {
        value: 1,
        label: "La función social de la vivienda prima sobre los inmuebles vacíos de fondos y bancos",
        emoji: "🔴",
        explanation: "Usted defiende que tener un techo es un derecho inalienable; no considera delictiva la ocupación de pisos vacíos propiedad de grandes fondos buitre o entidades financieras rescatadas, y rechaza el uso de la fuerza policial contra colectivos vulnerables."
      }
    ],
    partyWeights: {
      vox: 5.0,
      salf: 5.0,
      pp: 4.3,
      psoe: 2.7,
      sumar: 1.4,
      podemos: 1.0
    },
    axisWeight: { eco: 0.3, soc: 0.9 }
  },
  {
    id: 6,
    category: "Vivienda y Economía",
    topic: "Regulación del Precio del Alquiler",
    statement: "¿Debe el Gobierno intervenir en el mercado fijando topes a los precios del alquiler en zonas con precios disparados?",
    contextNote: "<strong>Contexto legal:</strong> La Ley de Vivienda estatal de 2023 permite declarar 'zonas de mercado tensionado' para fijar límites a las subidas del alquiler a grandes tenedores e incentivar bonificaciones fiscales a pequeños propietarios. El debate contrapone limitar precios para proteger a inquilinos frente al argumento de que los topes reducen la oferta al provocar que los dueños retiren sus pisos o los pasen a alquiler turístico.",
    options: [
      {
        value: 5,
        label: "Topar alquileres obligatoriamente y penalizar drásticamente la especulación",
        emoji: "🟢",
        explanation: "Usted apoya imponer topes obligatorios e inmediatos al alquiler en todas las ciudades tensionadas, limitar de raíz los pisos turísticos y sancionar a fondos y grandes propietarios que acaparen viviendas o cobren precios abusivos."
      },
      {
        value: 4,
        label: "Aplicar la Ley de Vivienda con zonas tensionadas e incentivos fiscales",
        emoji: "🌱",
        explanation: "Usted respalda utilizar topes de precios en barrios saturados donde los sueldos no dan para pagar una casa, combinando los límites de renta con rebajas en el IRPF para los propietarios que mantengan precios asequibles."
      },
      {
        value: 3,
        label: "Medidas mixtas: ayudas al alquiler juvenil y avales públicos sin fijar precios rígidos",
        emoji: "⚖️",
        explanation: "Usted prefiere no distorsionar el mercado con topes fijos por miedo a que se reduzca el número de pisos en alquiler; prefiere que el Estado avale a jóvenes y ayude a pagar fianzas mientras da seguridad al casero."
      },
      {
        value: 2,
        label: "Rechazar topes de precios: dar seguridad jurídica e incentivos a los propietarios",
        emoji: "🍂",
        explanation: "Usted argumenta que fijar precios por decreto ahuyenta la oferta y encarece el mercado negro; defiende incentivos fiscales generosos a quienes alquilen a largo plazo y garantías de cobro frente a impagos."
      },
      {
        value: 1,
        label: "Libre mercado absoluto: el precio debe fijarse únicamente por oferta y demanda",
        emoji: "🔴",
        explanation: "Usted rechaza cualquier intervención estatal en los contratos de arrendamiento; sostiene que la libertad de pactos entre propietario e inquilino es sagrada y que la única forma de bajar rentas es que haya muchos más pisos compitiendo libremente."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 4.9,
      psoe: 4.0,
      pp: 1.8,
      vox: 1.4,
      salf: 1.0
    },
    axisWeight: { eco: -0.9, soc: -0.3 }
  },
  {
    id: 7,
    category: "Vivienda y Economía",
    topic: "Vivienda, Suelo y Acceso a la Propiedad",
    statement: "¿Cuál debe ser la estrategia principal del Estado para que la gente (y especialmente los jóvenes) pueda acceder a un hogar digno?",
    contextNote: "<strong>Contexto del debate:</strong> España tiene uno de los parques de vivienda pública más bajos de Europa (en torno al 2-3% del total frente al 15-20% de países del norte). Se debate entre si el Estado debe financiar y construir cientos de miles de viviendas públicas de alquiler social, o si se debe liberalizar suelo urbanizable para que promotores privados construyan más y más barato, facilitando además la compra en propiedad.",
    options: [
      {
        value: 5,
        label: "Crear un gran parque de vivienda 100% público de alquiler social permanente",
        emoji: "🟢",
        explanation: "Usted exige que el Estado y las CCAA construyan de forma masiva vivienda pública que nunca pueda ser privatizada ni vendida, garantizando alquileres equivalentes al 30% de los ingresos de familias y jóvenes."
      },
      {
        value: 4,
        label: "Aumentar la Vivienda de Protección Oficial (VPO) combinando alquiler y compra",
        emoji: "🌱",
        explanation: "Usted apoya un plan estatal ambicioso de VPO financiado con fondos públicos, ofreciendo tanto alquiler protegido como fórmulas de compra a precio tasado para familias trabajadoras y jóvenes."
      },
      {
        value: 3,
        label: "Movilizar suelos públicos en colaboración con empresas constructoras privadas",
        emoji: "⚖️",
        explanation: "Usted cree que la administración no tiene capacidad económica para construirlo todo sola; defiende ceder suelo público a promotores privados para que construyan vivienda asequible a cambio de concesiones a medio plazo."
      },
      {
        value: 2,
        label: "Liberalizar suelo, abaratar licencias de obra y conceder avales hipotecarios",
        emoji: "🍂",
        explanation: "Usted defiende que el encarecimiento de la vivienda se debe a la lentitud de los ayuntamientos y la escasez de suelo urbanizable; pide desregular el urbanismo, agilizar licencias y avalar la entrada de la hipoteca a jóvenes para que puedan ser propietarios."
      },
      {
        value: 1,
        label: "Fomentar la cultura de la propiedad privada y eliminar impuestos a la compra (AJD, ITP)",
        emoji: "🔴",
        explanation: "Usted considera que España debe ser un país de propietarios independientes, no de inquilinos dependientes del Estado; exige suprimir los impuestos que gravan la compra de vivienda (como el ITP y Actos Jurídicos) y desregular totalmente el suelo."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 4.8,
      psoe: 4.1,
      pp: 2.1,
      vox: 1.7,
      salf: 1.2
    },
    axisWeight: { eco: -0.8, soc: 0 }
  },
  {
    id: 8,
    category: "Economía y Sociedad",
    topic: "Subsidios y Ayudas Sociales ('Las Paguitas')",
    statement: "¿Cómo deben gestionarse las ayudas públicas contra la pobreza, como el Ingreso Mínimo Vital (IMV) o los subsidios de desempleo?",
    contextNote: "<strong>Contexto del debate:</strong> El Ingreso Mínimo Vital garantiza un suelo de subsistencia para familias sin ingresos. Quienes lo apoyan señalan que rescata a miles de niños y familias de la indigencia extrema. Quienes lo critican afirman que desincentiva la búsqueda activa de empleo si no se liga a la obligación estricta de aceptar ofertas de trabajo o cursos obligatorios, generando redes de dependencia estatal permanente.",
    options: [
      {
        value: 5,
        label: "Derecho universal a una Renta Básica Incondicional contra la pobreza",
        emoji: "🟢",
        explanation: "Usted defiende que toda persona tiene derecho a unos ingresos vitales garantizados por el simple hecho de existir, sin burocracia humillante ni condiciones laborales previas, para erradicar la pobreza severa y dar libertad real a los ciudadanos."
      },
      {
        value: 4,
        label: "Mantener el Ingreso Mínimo Vital y subsidios amplios, facilitando su acceso",
        emoji: "🌱",
        explanation: "Usted respalda un escudo social potente con el IMV y subsidios de desempleo que cubran a familias vulnerables y parados de larga duración, simplificando trámites para que nadie quede excluido de la ayuda pública."
      },
      {
        value: 3,
        label: "Ayudas estrictamente temporales y con incentivos activos para no rechazar empleo",
        emoji: "⚖️",
        explanation: "Usted apoya la ayuda social puntual en momentos de necesidad, pero considera imprescindible que no sea perpetua y que se pueda compatibilizar con empleos a tiempo parcial para que trabajar siempre compense más que cobrar el subsidio."
      },
      {
        value: 2,
        label: "Condicionalidad rigurosa: retirar la ayuda si se rechazan cursos o empleos disponibles",
        emoji: "🍂",
        explanation: "Usted cree que la proliferación de subsidios sin control fomenta la pasividad y el empleo sumergido; exige retirar inmediatamente cualquier prestación a quien rechace una oferta de trabajo adecuada o no asista a formación obligatoria."
      },
      {
        value: 1,
        label: "Fin del Estado asistencialista ('paguitas'): las ayudas crónicas empobrecen y crean redes clientelares",
        emoji: "🔴",
        explanation: "Usted denuncia que las paguitas generalizadas arruinan al contribuyente, destruyen la cultura del esfuerzo y son usadas por los políticos para comprar votos; defiende reducir las ayudas al mínimo estricto de emergencia y centrarse en crear empleo privado."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 4.8,
      psoe: 4.0,
      pp: 2.2,
      vox: 1.5,
      salf: 1.0
    },
    axisWeight: { eco: -0.9, soc: 0 }
  },
  {
    id: 9,
    category: "Servicios Públicos",
    topic: "Sanidad, Transporte y Privatizaciones",
    statement: "¿Cuál debe ser el papel de la empresa privada en la gestión de servicios esenciales como la sanidad, hospitales o transporte ferroviario?",
    contextNote: "<strong>Contexto del debate:</strong> En España conviven modelos de gestión pública directa con conciertos sanitarios (hospitales de gestión privada pero de acceso público gratuito) y externalización de servicios. Los defensores de lo 100% público sostienen que externalizar privatiza los beneficios y deteriora las plantillas; los defensores de la colaboración público-privada argumentan que agiliza listas de espera y optimiza los costes para el contribuyente.",
    options: [
      {
        value: 5,
        label: "Servicios esenciales 100% públicos y reversión inmediata de todas las concesiones privadas",
        emoji: "🟢",
        explanation: "Usted rechaza que se haga negocio con la salud o el transporte; exige recuperar la gestión directa de todos los hospitales y servicios privatizados, prohibir la externalización y blindar los presupuestos del personal sanitario público."
      },
      {
        value: 4,
        label: "Priorizar la gestión pública, usando el sector privado solo para emergencias o listas de espera",
        emoji: "🌱",
        explanation: "Usted defiende una sanidad y un transporte públicos fuertes y bien financiados, acudiendo a conciertos privados de forma excepcional y regulada únicamente cuando los medios públicos no den abasto temporalmente."
      },
      {
        value: 3,
        label: "Modelo mixto equilibrado: lo importante es la calidad del servicio, no quién lo gestione",
        emoji: "⚖️",
        explanation: "Usted adopta una visión pragmática: mientras la atención médica y el transporte sigan siendo gratuitos o asequibles para el ciudadano, no ve problema en que la gestión la realice una empresa si lo hace con calidad, agilidad y menor coste."
      },
      {
        value: 2,
        label: "Fomentar la colaboración público-privada y desgravaciones a la sanidad privada",
        emoji: "🍂",
        explanation: "Usted cree que la gestión privada es más eficiente y ágil que la burocracia estatal; apoya desgravaciones fiscales para quienes contraten un seguro médico privado, descongestionando así la sanidad pública."
      },
      {
        value: 1,
        label: "Privatización amplia y libre competencia: el monopolio estatal encarece y empeora los servicios",
        emoji: "🔴",
        explanation: "Usted defiende reducir drásticamente las empresas públicas y la nómina del Estado; aboga por privatizar la gestión de servicios, abrir el transporte a libre competencia sin subsidios masivos y aplicar cheques de libre elección médica y escolar."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 4.9,
      psoe: 4.0,
      pp: 2.1,
      vox: 1.8,
      salf: 1.2
    },
    axisWeight: { eco: -1.0, soc: 0 }
  },
  {
    id: 10,
    category: "Educación y Valores",
    topic: "Contenidos Escolares: Religión, Sexología y Libertad Familiar",
    statement: "¿Qué tipo de contenidos deben impartirse en las aulas respecto a valores morales, afectivo-sexuales y religión?",
    contextNote: "<strong>Contexto del debate:</strong> La Ley de Educación actual introduce la educación afectivo-sexual y la diversidad de género en los colegios públicos, y mantiene la asignatura de religión como optativa sin contar para nota de becas. Los sectores progresistas la ven esencial para educar contra el acoso y la violencia machista. Sectores conservadores denuncian 'adoctrinamiento ideológico en las aulas' y exigen la aprobación del 'PIN Parental' para autorizar cualquier taller moral a sus hijos.",
    options: [
      {
        value: 5,
        label: "Educación afectivo-sexual y diversidad obligatorias; escuela pública laica sin religión confesional",
        emoji: "🟢",
        explanation: "Usted defiende que los colegios deben educar de forma obligatoria en igualdad, diversidad LGTBI+ y prevención de la violencia machista, eliminando por completo la religión de los centros públicos para garantizar una escuela 100% laica y científica."
      },
      {
        value: 4,
        label: "Talleres de igualdad y educación sexual en el currículo, manteniendo religión optativa",
        emoji: "🌱",
        explanation: "Usted apoya impartir nociones de salud sexual, respeto y prevención de abusos en la escuela, manteniendo la opción voluntaria de cursar religión para las familias que así lo decidan dentro del marco constitucional."
      },
      {
        value: 3,
        label: "Centrar la escuela en contenidos académicos y valores cívicos consensuados",
        emoji: "⚖️",
        explanation: "Usted prefiere que la escuela se concentre en matemáticas, lengua, ciencias e historia sin entrar en debates ideológicos divisivos, tratando la sexualidad y la religión desde un enfoque informativo, respetuoso y neutro."
      },
      {
        value: 2,
        label: "Libertad de las familias a elegir los contenidos morales (PIN Parental) y respeto a la concertada",
        emoji: "🍂",
        explanation: "Usted sostiene que la educación moral y sexual corresponde prioritariamente a los padres, no a la administración del Estado; defiende que las familias puedan vetar talleres con carga ideológica y protege la financiación a la escuela concertada y católica."
      },
      {
        value: 1,
        label: "Erradicar el adoctrinamiento escolar ideológico y devolver el peso a la religión y valores tradicionales",
        emoji: "🔴",
        explanation: "Usted exige expulsar de las aulas lo que considera 'propaganda woke y de género' impuesta por el Estado; pide revalorizar la asignatura de religión, el patriotismo, la autoridad del profesorado y el derecho inalienable de las familias a educar según su fe."
      }
    ],
    partyWeights: {
      podemos: 5.0,
      sumar: 5.0,
      psoe: 4.2,
      pp: 2.3,
      vox: 1.0,
      salf: 1.3
    },
    axisWeight: { eco: 0, soc: -1.0 }
  },
  {
    id: 11,
    category: "Ecología y Campo",
    topic: "Transición Energética, Agenda 2030 y Sector Primario",
    statement: "¿Qué rumbo debe tomar España respecto a las restricciones medioambientales (Zonas de Bajas Emisiones, coches de combustión) y la energía?",
    contextNote: "<strong>Contexto del debate:</strong> La legislación europea del 'Pacto Verde' y la Agenda 2030 fijan el fin de coches de combustión para 2035 y el cierre paulatino de centrales nucleares en favor de renovables. Las organizaciones agrarias y partidos conservadores denuncian que estas normas asfixian al campo, a ganaderos y camioneros con normativas imposibles, mientras que defensores ecológicos sostienen que frenar la sequía y la crisis climática es una urgencia vital inaplazable.",
    options: [
      {
        value: 5,
        label: "Acelerar la descarbonización urgente: prohibir nucleares, coches contaminantes y pesticidas dañinos",
        emoji: "🟢",
        explanation: "Usted apoya medidas ecológicas valientes e inmediatas: prohibir el tráfico contaminante en ciudades, cerrar las nucleares, implantar renovables bajo control público y reconvertir el modelo productivo para frenar el colapso ecológico."
      },
      {
        value: 4,
        label: "Cumplir los objetivos climáticos europeos dando ayudas a los sectores afectados",
        emoji: "🌱",
        explanation: "Usted defiende avanzar hacia una economía verde reduciendo emisiones y fomentando el transporte público y las renovables, pero acompañando a los agricultores y a la industria con subvenciones para que la transición sea justa."
      },
      {
        value: 3,
        label: "Equilibrio pragmático: cuidar el medio ambiente sin encarecer la luz ni los alimentos",
        emoji: "⚖️",
        explanation: "Usted apoya proteger la naturaleza y reciclar, pero se opone a cualquier medida ecológica que dispare la factura eléctrica de las familias o hunda la rentabilidad de las pequeñas explotaciones del campo."
      },
      {
        value: 2,
        label: "Prorrogar las centrales nucleares y flexibilizar las exigencias medioambientales al campo",
        emoji: "🍂",
        explanation: "Usted defiende mantener abiertas las centrales nucleares como energía limpia, barata e ininterrumpida; además pide relajar las cargas burocráticas y normativas ambientales impuestas a agricultores, ganaderos y pescadores."
      },
      {
        value: 1,
        label: "Rechazo total a la Agenda 2030 y al fanatismo verde por considerarlo destructivo para España",
        emoji: "🔴",
        explanation: "Usted denuncia que las políticas ecologistas europeas son una imposición globalista que arruina el campo español, eleva los costes del diésel y la gasolina, y destruye nuestra soberanía industrial en favor de competidores como Marruecos o China."
      }
    ],
    partyWeights: {
      sumar: 5.0,
      podemos: 5.0,
      psoe: 4.2,
      pp: 2.5,
      vox: 1.0,
      salf: 1.0
    },
    axisWeight: { eco: -0.6, soc: -0.7 }
  },
  {
    id: 12,
    category: "Ciencia e Innovación",
    topic: "Investigación Científica, I+D+i y Fuga de Cerebros",
    statement: "¿Cómo debe impulsar España la investigación científica, el desarrollo tecnológico y la retención del talento joven?",
    contextNote: "<strong>Contexto del debate:</strong> España invierte aproximadamente el 1,4% de su PIB en I+D, por debajo de la media europea (2,3%). Se debate entre aumentar de forma decidida la financiación pública de universidades y del CSIC con contratos estables para investigadores, o potenciar la desgravación fiscal a empresas privadas e inversores de capital riesgo para que sean ellas quienes lideren la innovación aplicada.",
    options: [
      {
        value: 5,
        label: "Duplicar la inversión pública estatal en ciencia y blindar plazas fijas para científicos",
        emoji: "🟢",
        explanation: "Usted exige elevar por ley el presupuesto público de I+D al menos al 2,5% del PIB, dignificar los salarios de los investigadores jóvenes en centros públicos y crear una carrera científica pública estable que impida la fuga de talentos al extranjero."
      },
      {
        value: 4,
        label: "Aumentar los presupuestos del CSIC y universidades, fomentando convenios",
        emoji: "🌱",
        explanation: "Usted apoya un pacto de Estado por la ciencia que asegure una financiación creciente y estable en el tiempo para laboratorios públicos y universitarios, simplificando la burocracia en la concesión de becas y proyectos de investigación."
      },
      {
        value: 3,
        label: "Alianza público-privada: vincular la investigación universitaria a la industria",
        emoji: "⚖️",
        explanation: "Usted cree que no solo se trata de gastar más dinero público, sino de conectar los laboratorios con el tejido empresarial español para que los descubrimientos se traduzcan en patentes, fármacos y productos comerciales de éxito."
      },
      {
        value: 2,
        label: "Incentivos fiscales generosos y reducción de impuestos a empresas innovadoras y startups",
        emoji: "🍂",
        explanation: "Usted defiende que los países más innovadores son aquellos con menor presión fiscal sobre la inversión privada; pide eliminar impuestos a las patentes y facilitar visados y ventajas a emprendedores tecnológicos."
      },
      {
        value: 1,
        label: "Modelo de libre mercado: la innovación la lidera la empresa privada, no la burocracia estatal",
        emoji: "🔴",
        explanation: "Usted considera que el Estado suele malgastar dinero en subvenciones a dedo; prefiere desregular, recortar chiringuitos estatales de investigación y dejar que el mercado y la competencia privada financien los proyectos verdaderamente viables."
      }
    ],
    partyWeights: {
      podemos: 4.8,
      sumar: 4.9,
      psoe: 4.3,
      pp: 2.8,
      vox: 2.0,
      salf: 1.8
    },
    axisWeight: { eco: -0.6, soc: 0 }
  },
  {
    id: 13,
    category: "Deporte y Salud",
    topic: "Fomento del Deporte Escolar, Instalaciones Públicas y Salud",
    statement: "¿Cuál debe ser la prioridad pública respecto al deporte y la actividad física de los ciudadanos?",
    contextNote: "<strong>Contexto del debate:</strong> El sedentarismo y la obesidad infantil son problemas crecientes de salud pública. Algunos defienden una red pública masiva de polideportivos municipales gratuitos o subvencionados y más horas de educación física en colegios; otros apuestan por la gestión privada de gimnasios, patrocinio empresarial y desgravaciones en el IRPF por gastos en clubes y actividades deportivas.",
    options: [
      {
        value: 5,
        label: "Deporte como derecho a la salud: polideportivos municipales 100% públicos y gratuitos",
        emoji: "🟢",
        explanation: "Usted considera la práctica deportiva un elemento clave de la sanidad preventiva; exige polideportivos e instalaciones públicas gratuitas en todos los barrios, becas deportivas para niños sin recursos y más horas de deporte escolar obligatorio."
      },
      {
        value: 4,
        label: "Subvencionar el deporte base, clubes locales y escuelas infantiles",
        emoji: "🌱",
        explanation: "Usted apoya que ayuntamientos y comunidades doten de ayudas a los clubes deportivos de barrio y federaciones para mantener tarifas asequibles en natación, fútbol o atletismo para familias trabajadoras."
      },
      {
        value: 3,
        label: "Gestión mixta de instalaciones deportivas para garantizar mantenimiento y calidad",
        emoji: "⚖️",
        explanation: "Usted apoya la colaboración con gimnasios y empresas privadas para gestionar polideportivos municipales a precios regulados, asegurando que las instalaciones estén modernizadas sin endeudar al ayuntamiento."
      },
      {
        value: 2,
        label: "Desgravaciones en el IRPF por cuotas de gimnasio y patrocinio privado a federaciones",
        emoji: "🍂",
        explanation: "Usted propone que los gastos de familias en gimnasios, piscinas o clubes se puedan desgravar en la declaración de la renta, y que el deporte de competición se financie con patrocinios privados con exenciones fiscales."
      },
      {
        value: 1,
        label: "El deporte debe ser un ámbito privado y voluntario sin subvenciones públicas",
        emoji: "🔴",
        explanation: "Usted cree que el contribuyente no debe pagar con sus impuestos las actividades deportivas de nadie; defiende que las instalaciones y clubes compitan en el mercado libre sin depender del dinero de los ayuntamientos."
      }
    ],
    partyWeights: {
      podemos: 4.8,
      sumar: 4.8,
      psoe: 4.1,
      pp: 2.8,
      vox: 2.2,
      salf: 1.8
    },
    axisWeight: { eco: -0.5, soc: 0 }
  },
  {
    id: 14,
    category: "Regeneración y Justicia",
    topic: "Partitocracia, Corrupción y Ruptura Institucional",
    statement: "¿Cómo evalúa el estado del sistema político en España y el reparto partidista de la justicia y los organismos públicos?",
    contextNote: "<strong>Contexto del debate:</strong> La politización del Consejo General del Poder Judicial (CGPJ), el Tribunal Constitucional y los escándalos de corrupción han alimentado un profundo descontento. Los partidos tradicionales defienden el pacto institucional y la estabilidad parlamentaria del 78, mientras que fuerzas alternativas denuncian una 'casta política criminal y parasitaria' o exigen una ruptura democrática profunda.",
    options: [
      {
        value: 5,
        label: "Ruptura frontal: castigo penal a la casta política corrupta y cierre de organismos parásitos",
        emoji: "🟢",
        explanation: "Usted denuncia una mafia política bipartidista protegida por medios subvencionados; exige auditorías implacables, cárcel inmediata para políticos corruptos, desmantelar chiringuitos institucionales y recortar drásticamente el gasto político del Estado."
      },
      {
        value: 4,
        label: "Independencia judicial total: jueces elegidos por jueces y fin de las puertas giratorias",
        emoji: "🌱",
        explanation: "Usted ve con alarma la colonización política de la justicia y los entes públicos; apoya una reforma constitucional para que los jueces elijan sin injerencia a los vocales del CGPJ y se prohíba que ministros salten a la judicatura o a fiscalías."
      },
      {
        value: 3,
        label: "El sistema tiene fallos que deben corregirse, pero las instituciones son la garantía democrática",
        emoji: "⚖️",
        explanation: "Usted reconoce casos vergonzosos de corrupción pero rechaza los discursos de antipolítica radical; cree que los tribunales y los controles democráticos actuales terminan funcionando y son preferibles a saltos al vacío populistas."
      },
      {
        value: 2,
        label: "Estabilidad del régimen constitucional del 78 y alternancia entre grandes partidos",
        emoji: "🍂",
        explanation: "Usted defiende la legitimidad del régimen parlamentario y la alternancia de gobierno; considera que la moderación institucional y los consensos entre partidos con experiencia de gobierno son indispensables para la estabilidad económica de España."
      },
      {
        value: 1,
        label: "Confianza plena en las instituciones democráticas del Estado de Derecho",
        emoji: "🔴",
        explanation: "Usted descalifica las acusaciones de que España es una partitocracia corrupta; sostiene que vivimos en una democracia plena y garantista reconocida internacionalmente, y que atacar las instituciones debilita nuestra convivencia."
      }
    ],
    partyWeights: {
      salf: 5.0,
      vox: 4.1,
      podemos: 4.0,
      sumar: 3.0,
      pp: 1.8,
      psoe: 1.4
    },
    axisWeight: { eco: 0, soc: 0 }
  },
  {
    id: 15,
    isPriorityQuestion: true,
    category: "Prioridades de País",
    topic: "Tus Prioridades Políticas para España",
    statement: "De los siguientes grandes temas de debate en España, ¿a cuáles das mayor prioridad e importancia para el futuro del país?",
    contextNote: "<strong>Pregunta especial:</strong> Selecciona tus <strong>3 prioridades máximas</strong> (puedes marcarlas en orden de importancia). Esta selección aumentará el peso de esos temas específicos en el cálculo final de afinidad con cada partido político.",
    priorityOptions: [
      { id: "vivienda", label: "Acceso a la Vivienda y Precio del Alquiler", icon: "🏠", relatedQuestions: [5, 6, 7] },
      { id: "sanidad_social", label: "Sanidad, Servicios Públicos y Dependencia", icon: "🏥", relatedQuestions: [8, 9] },
      { id: "inmigracion_fronteras", label: "Inmigración, Control de Fronteras y Soberanía", icon: "🛂", relatedQuestions: [4] },
      { id: "economia_impuestos", label: "Economía, Empleo y Bajada de Impuestos", icon: "💼", relatedQuestions: [8, 9] },
      { id: "igualdad_lgtbi", label: "Feminismo, Derechos LGTBI+ e Igualdad", icon: "💜", relatedQuestions: [1, 3, 10] },
      { id: "corrupcion_casta", label: "Lucha contra la Corrupción y la Casta Política", icon: "⚖️", relatedQuestions: [14] },
      { id: "medio_ambiente", label: "Transición Ecológica y Defensa del Campo", icon: "🌿", relatedQuestions: [11] },
      { id: "educacion_familia", label: "Educación de Calidad, Familia y Natalidad", icon: "👨‍👩‍👧‍👦", relatedQuestions: [1, 10] },
      { id: "seguridad_okupacion", label: "Seguridad Ciudadana y Desalojo de Okupas", icon: "🛡️", relatedQuestions: [5] },
      { id: "ciencia_deporte", label: "Ciencia, Investigación (I+D) y Deporte Saludable", icon: "🔬", relatedQuestions: [12, 13] }
    ]
  }
];

// Metadatos y definición de los 6 partidos políticos (con SALF en lugar de Alvise como nombre principal)
const PARTIES = {
  vox: {
    id: "vox",
    name: "VOX",
    leader: "Santiago Abascal",
    color: "#5ac035",
    lightBg: "rgba(90, 192, 53, 0.12)",
    borderCol: "#5ac035",
    logoLetter: "V",
    tagline: "Derecha identitaria, provida, soberanista y nacional-conservadora",
    description: "Defiende la recentralización del Estado (fin de autonomías), mano dura contra la inmigración ilegal, oposición frontal a leyes de género y aborto, bajadas fiscales, protección del campo frente a la Agenda 2030 y desalojo exprés de okupas.",
    coords: { x: 0.75, y: 0.85 }
  },
  pp: {
    id: "pp",
    name: "PP (Partido Popular)",
    leader: "Alberto Núñez Feijóo",
    color: "#1d84ce",
    lightBg: "rgba(29, 132, 206, 0.12)",
    borderCol: "#1d84ce",
    logoLetter: "PP",
    tagline: "Centro-derecha liberal-conservador y constitucionalista",
    description: "Apuesta por la moderación fiscal, apoyo a la empresa privada y propietarios de vivienda, defensa del marco constitucional del 78, control migratorio ordenado y estabilidad institucional.",
    coords: { x: 0.55, y: 0.38 }
  },
  psoe: {
    id: "psoe",
    name: "PSOE",
    leader: "Pedro Sánchez",
    color: "#e30613",
    lightBg: "rgba(227, 6, 19, 0.12)",
    borderCol: "#e30613",
    logoLetter: "PSOE",
    tagline: "Centro-izquierda socialdemócrata y progresista",
    description: "Centrado en el fortalecimiento del Estado del bienestar, fiscalidad progresiva, diálogo territorial y plurinacional, derechos feministas y LGTBI, transición ecológica y contención del alquiler mediante la Ley de Vivienda.",
    coords: { x: -0.40, y: -0.45 }
  },
  sumar: {
    id: "sumar",
    name: "Sumar",
    leader: "Yolanda Díaz",
    color: "#e51b5e",
    lightBg: "rgba(229, 27, 94, 0.12)",
    borderCol: "#e51b5e",
    logoLetter: "S+",
    tagline: "Izquierda transformadora, verde, laboralista y feminista",
    description: "Defiende topar alquileres de forma estricta, impuestos a grandes fortunas, reducción de jornada laboral, sanidad 100% pública (incluyendo dentista y salud mental), ecologismo de choque y plenos derechos para migrantes.",
    coords: { x: -0.75, y: -0.75 }
  },
  podemos: {
    id: "podemos",
    name: "Podemos",
    leader: "Ione Belarra / Irene Montero",
    color: "#7b3294",
    lightBg: "rgba(123, 50, 148, 0.14)",
    borderCol: "#7b3294",
    logoLetter: "P",
    tagline: "Izquierda rupturista, republicana, pacifista y feminista combativa",
    description: "Reclama la ruptura con el bipartidismo, autodeterminación territorial, III República, aborto y eutanasia irrestrictos, intervención drástica del mercado de vivienda castigando a fondos buitre y regularización inmediata de inmigrantes sin CIEs.",
    coords: { x: -0.85, y: -0.85 }
  },
  salf: {
    id: "salf",
    name: "SALF (Se Acabó La Fiesta)",
    leader: "Alvise Pérez",
    color: "#eab308",
    accentCol: "#000000",
    lightBg: "rgba(234, 179, 8, 0.14)",
    borderCol: "#eab308",
    logoLetter: "SALF",
    tagline: "Populismo anti-establishment, combate implacable a la partitocracia y mano dura",
    description: "Canaliza el descontento radical contra la clase política tradicional ('la casta criminal'), los medios subvencionados y la fiscalidad abusiva; propone auditorías penales y cárcel por corrupción, deportaciones masivas, desalojo inmediato de okupas y desmantelamiento de organismos y chiringuitos estatales.",
    coords: { x: 0.68, y: 0.68 }
  }
};

// Exportar para entornos de testing (Node.js) si existe
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTIONS, PARTIES };
}
