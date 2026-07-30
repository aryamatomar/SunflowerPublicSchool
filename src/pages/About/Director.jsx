import React from 'react';
import MessageLayout from '../../components/MessageLayout';

export default function Director() {
  const paragraphs = [
    "With immense pride and great pleasure I welcome you to the school’s website. You could be a parent, a student, a staff member or anyone interested in gaining deeper insights into the functioning and learning environment of our exciting world. I invite you to navigate through our ‘online school’ to help you understand lucidly why our school provides the best environment for your little ones and young adults. Right from its inception to now, our institution has marched forward to spread the light of education and pave the path of academic excellence for every student. The key focus areas continue to remain - creating opportunities, challenging minds, encouraging innovation and sustaining excitement.",
    "Our school’s objective is to continue being recognized as a torch bearer of leading education methods and an institution that has students defining a future not only for them but for the world as well. We have and will continually strive for brighter and more secure prospects for our children.",
    "The values and environment we provide for our children are sustainable and see them successfully through their formative years. The investment we put in to our children today will help them achieve greater heights and create the unimaginable. My sincere thanks to the school’s Principal, teachers and other staff members without whom these successes – big and small – would not be possible. They not only teach the children the subjects but also inculcate values of commitment, zealousness and pride in everything they do.",
    "Once again I welcome you and sincerely hope that our website will rouse your interest and encourage you to take a step towards making one more positive difference in your life.",
    "Thank you and stay blessed."
  ];

  return (
    <MessageLayout
      breadcrumbItems={[{ label: 'About Sunflower' }, { label: "Director's Message" }]}
      headerTitle="Director's Message"
      headerSubtitle="Mrs. Sheela Dayal — Director, Sun Flower Public School"
      name="Mrs. Sheela Dayal"
      title="Director"
      badgeText="Message from Desk"
      messageTitle="DIRECTOR'S MESSAGE"
      paragraphs={paragraphs}
      signoffName="Mrs. Sheela Dayal"
      signoffTitle="(Director)"
    />
  );
}
