import { useEffect, useState } from 'react';
// Mock function to format the transcript
const formatTranscript = (rawTranscript) => {
  // Simple formatting logic for demonstration purposes
  // This can be replaced with a more sophisticated algorithm or API call
  let formattedTranscript = rawTranscript
    .replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase()) // Capitalize sentences
    .replace(/(\w)([.?!])(\w)/g, '$1$2 $3') // Add space after punctuation
    .replace(/(\w)([.?!])/g, '$1$2 ') // Ensure punctuation is followed by a space
    .replace(/\s+/g, ' ') // Remove extra spaces
    .trim();

  return formattedTranscript;
};

export const useFormatTranscript = (rawTranscript) => {
  const [formattedTranscript, setFormattedTranscript] = useState('');

  useEffect(() => {
    const formatted = formatTranscript(rawTranscript);
    setFormattedTranscript(formatted);
  }, [rawTranscript]);

  return formattedTranscript;
};



export const useAIFormatTranscript = (rawTranscript) => {
  const [formattedTranscript, setFormattedTranscript] = useState('');

  useEffect(() => {
    const formatTranscript = async () => {
      if (!rawTranscript) return;

      try {
        const response = await fetch('/api/format-transcript', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ transcript: rawTranscript }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFormattedTranscript(data.formattedTranscript);
      } catch (error) {
        console.error('Error formatting transcript:', error);
        // Fallback to raw transcript if formatting fails
        setFormattedTranscript(rawTranscript);
      }
    };

    formatTranscript();
  }, [rawTranscript]);

  return formattedTranscript;
};


// export const useAIFormatTranscript = (rawTranscript) => {
//   const [formattedTranscript, setFormattedTranscript] = useState('');
  



// console.log('Environment Variable OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
//   useEffect(() => {
//     const formatTranscript = async () => {
//       try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           },
//           body: JSON.stringify({
//             model: 'gpt3.5-turbo',
//             messages: [
//               {
//                 role: 'system',
//                 content: 'Your task is to format this prompt, make it clear, add the correct punctuation and capitalization, do not change the content nor the message.',
//               },
//               {
//                 role: 'user',
//                 content: rawTranscript,
//               },
//             ],
//           }),
//         });

//         const data = await response.json();
//         const formatted = data.choices[0].message.content;
//         setFormattedTranscript(formatted);
//       } catch (error) {
//         console.error('Error formatting transcript:', error);
//       }
//     };

//     if (rawTranscript) {
//       formatTranscript();
//     }
//   }, [rawTranscript]);

//   return formattedTranscript;
// };
