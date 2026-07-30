import React from 'react';
import MessageLayout from '../../components/MessageLayout';

export default function Principal() {
  const paragraphs = [
    "We at Sun Flower believe in nurturing the child in the radiance of the Sun Flower Philosophy and Sun Flower ` Vision summed up in the school motto “Come to Learn, Go to Serve\". It gives me immense joy to see that our school has, over the years, acquired the true mark of excellence, not only in the field of academic Learning, but in all areas of educational activity. Youth resonates with infinite potential. Youth is our future. I believe that the students' accomplishments will exceed our wildest dreams.",
    "\"The school is in constant and continuous process of educating and enhancing the students' personality and knowledge, infusing them with a greater degree of confidence and poise than what their predecessors gained from the school.",
    "Alongwith imparting value -based education and making them technologically vibrant we are resolved to stand with the marginalized and less fortunate , to work together in caring for our earth its flora and fauna and in educating others in the responsible use of its resources . we hope thus , to be instruments of reconciliation , pardon and compassion . we cannot underestimate the importance of this mission because our very existence tomorrow depends on it and our capacity to counter the negative impact of societal trends towords violence and materialism. We have reflected a kaleidoscope of learning , adventure , creativity and positive approach of our young minds through writing and drawing. I hope this effort of our young minds will serve as a stepping stone towards the many milestone we have to cover in pursuit of excellence.Children have an impressionable mind full of curiosity and sensitivity, always seeking avenues to express their ideas. I have been striving to sharpen the quality of that consciousness and urge in them to excel by providing opportunities through their school, for tapping this potential.",
    "God bless you all"
  ];

  return (
    <MessageLayout
      breadcrumbItems={[{ label: 'About Sunflower' }, { label: "Principal's Message" }]}
      headerTitle="Principal's Message"
      headerSubtitle="Dr. Shubhi Dayal (M.Sc, M.Ed, PhD) — Principal, Sun Flower Public School"
      name="Dr. Shubhi Dayal"
      title="Principal (M.Sc, M.Ed, PhD)"
      badgeText="Message from Desk"
      messageTitle="PRINCIPAL'S MESSAGE"
      paragraphs={paragraphs}
      signoffName="Dr. Shubhi Dayal"
      signoffTitle="(Principal)"
    />
  );
}
