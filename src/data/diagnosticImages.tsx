type Props = {
  src: string;
  caption: string;
  desription: string;
};
const diagnosticImages: Props[] = [
  {
    src: "https://readdy.ai/api/search-image?query=Alzheimers%20disease%20brain%20scan%20with%20molecular%20view%20showing%20protein%20aggregates%2C%20neural%20degeneration%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=2&orientation=landscape",
    caption: "Septic encephalopathy",
    desription:
      "Some microscopic alterations are observed on histological brain sections (often post-mortem)",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Parkinsons%20disease%20brain%20scan%20with%20molecular%20view%20showing%20dopamine%20neuron%20loss%2C%20basal%20ganglia%20dysfunction%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=3&orientation=landscape",
    caption: "Parkinson's Disease",
    desription:
      "Detection of dopamine neuron loss and basal ganglia dysfunction patterns.",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Multiple%20sclerosis%20brain%20scan%20with%20molecular%20view%20showing%20demyelination%2C%20white%20matter%20lesions%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=4&orientation=landscape",
    caption: "Multiple Sclerosis",
    desription:
      "Identification of demyelination patterns and white matter lesions characteristic of MS.",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Brain%20tumor%20molecular%20visualization%20showing%20abnormal%20cell%20growth%2C%20cancer%20markers%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=5&orientation=landscape",
    caption: "Brain Tumors",
    desription:
      "Precise localization and classification of various types of brain tumors and abnormal growths.",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Stroke%20brain%20scan%20with%20molecular%20view%20showing%20blood%20flow%20disruption%2C%20ischemic%20areas%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=6&orientation=landscape",
    caption: "Stroke",
    desription:
      "Real-time detection of ischemic and hemorrhagic stroke with treatment recommendation",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Epilepsy%20brain%20scan%20with%20molecular%20view%20showing%20abnormal%20electrical%20activity%2C%20seizure%20patterns%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=7&orientation=landscape",
    caption: "Epilepsy",
    desription:
      "Analysis of brain activity patterns to identify epileptic foci and seizure risk",
  },
];

export default diagnosticImages;
