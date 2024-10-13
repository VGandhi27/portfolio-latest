// data/research.js
import SVM from '../images/SVM.png'
import Mood from '../images/Mood.png'
const researchPapers = [
    {
      id: 1,
      title: 'SVM-Based Framework for Breast Cancer Detection',
      summary: 'Breast cancer has been among the most prevalent cancers in the last five years. According to WHO in 2020, more than 2.35 million people were diagnosed with Breast Cancer and more than 690 thousand deaths globally. Both researchers and doctors are facing the challenges of fighting cancer. This research paper aims to use different Supervised machine-learning techniques namely KNN, SVM (Support Vector Machine) and Logistic Regression for breast cancer detection. Our main objective is to determine whether the patient is diagnosed with a malign or benign cancer type. The Machine Learning algorithms were applied to the obtained dataset and the algorithms were evaluated using Accuracy as the performance measure. The obtained accuracy scores after applying KNN, SVM and LR are 92.98%, 95.5% and 95.11% respectively. The highest accuracy has been achieved by applying SVM. Early detection and accurate prediction of Cancer are fundamental to identifying patients who could benefit from the treatment and this can help in reducing the mortality rate due to cancer. With the help of various ML techniques, we can detect breast cancer more efficiently and effectively.',
      coAuthors: ['Dr. Monika Goyal', 'Dr. Stuti Saxena', 'Manik Jain',' Sumit Das' ],
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-2508-3_13', 
      date: 'Sep 19, 2024',
      image: SVM, 
    },
    {
      id: 2,
      title: 'Analysing the causes of Mood Disorders : A Comprehensive Study',
      summary: 'Depression or Mood Disorder has been one of the most prevalent mental disorders.According to WHO in 2020, more than 380 million people were diagnosed with Depression and more than 1050 thousand deaths have been reported globally. that can cause a loss of interest in general action that can lead to suicidal thoughts. This research paper aims to use different machine-learning techniques namely KNN, SVM(Support Vector Machine),Decision Tree, Naive Bayes and Logistic Regression for depression detection. Early detection and accurate prediction are fundamental to identifying patients who could benefit from the treatment and reduce the mortality rate due to depression. With the help of various ML techniques, we can detect depression more efficiently and effectively. This research primary contribution is exploring the features and their impact on detecting depression levels.',      coAuthors: ['Dr. Stuti Saxena','Dr. Vikesh Kumar' ],
      link: 'https://ijcmps.mstrust.in/Files/Vol/Issue/ijcmps-6-1-1.pdf',
      date: 'Jun 22, 2024',
      image: Mood,
    },
    // Add more papers as needed
  ];
  
  export default researchPapers;
  