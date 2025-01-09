import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { sendMessageThunk } from '../../redux/messages/messagesOperations';

const Input = () => {
  const dispatch = useDispatch();
  const userMessageHandler = ({ userMessage }, action) => {
    action.resetForm();

    dispatch(sendMessageThunk(userMessage));
  };
  return (
    <div>
      <div className="flex flex-col h-fit w-full mt-2  gap-y-2">
        <Formik
          initialValues={{
            userMessage: '',
          }}
          onSubmit={userMessageHandler}
        >
          <Form className="w-full flex  flex-col sm:flex-row items-center justify-around gap-10">
            <div className="relative flex-1 flex items-center justify-center">
              <div className="flex flex-col w-full">
                <div className="relative">
                  <Field
                    as="textarea"
                    name="userMessage"
                    className="flex w-full min-h-[80px] rounded-md border border-gray-400 dark:border-gray-600 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-hidden max-h-[70px] align-middle items-center"
                    placeholder="Talk to Agent..."
                    rows="1"
                  ></Field>
                </div>
              </div>
            </div>
            <button type="submit" className="btn">
              <p className="textOnButton">Send</p>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </Form>
        </Formik>
        <div>
          <p className="text-[10px] sm:text-xs text-center text-muted-foreground text-white mb-3">
            Agent can make mistakes. Check important info.
          </p>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground text-[#6796F0]">
            © 2024 $AGNT. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
