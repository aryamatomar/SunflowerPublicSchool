import React from 'react';
import MessageLayout from '../../components/MessageLayout';

export default function Manager() {
  const paragraphs = [
    "Warm Wishes !",
    "It is my privilege to write a short message for the Website of Sunflower Public School Dayalbagh, Agra. We live in a world of amazingly fast, instant and high-speed exchange of information and knowledge. And also we can make use of the technological advantages for the development of our school, staff and students. For students of Sunflower too, past and present as well as the many well wishers of this noble institution, the quick and immediate access to the school website can bring their beloved children of Sunflower closer to their hearts wherever they might be in this beautiful world.",
    "I take this opportunity to congratulate the principal, staff, students and parents for their strong sense of commitment, service and responsibility that has transformed this institution into an outstanding and significant temple of learning today. Sunflower has tried its best to excel in all departments of its students’ growth. The specialty of this institute is that it has made quality education accessible to all, thanks to the highly motivated staff and the availability of quality infrastructure.",
    "I pray that the Almighty God continues to bless this school as well as all the members of the Sunflower family, including the students, parents, and all those associated with this institution."
  ];

  return (
    <MessageLayout
      breadcrumbItems={[{ label: 'About Sunflower' }, { label: "Manager's Message" }]}
      headerTitle="Manager's Message"
      headerSubtitle="Mr. Animesh Dayal — Manager, Sun Flower Public School"
      name="Mr. Animesh Dayal"
      title="Manager"
      badgeText="Message from Desk"
      messageTitle="MESSAGE FROM DESK"
      paragraphs={paragraphs}
      signoffName="Mr. Animesh Dayal"
      signoffTitle="(Manager)"
    />
  );
}
