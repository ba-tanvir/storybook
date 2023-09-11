import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


const meta: Meta<FormComponent> = {
    component: FormComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
      moduleMetadata({
        imports: [
         BrowserAnimationsModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
        ]
      }),
    ],
  };

export default meta;
type Story = StoryObj<FormComponent>;


export const emptyStory: Story = {}


export const InvalidFormWithPlay: Story = {
    args: {
      
    },
    play: async ({ canvasElement }) => {
  
      const canvas = within(canvasElement);
  
      const branchNameInput = canvas.getByLabelText('Branch Name', {
        selector: 'input',
      });
      await userEvent.click(branchNameInput, {
        delay: 100,
      });
  
      const branchNameBanglaInput = canvas.getByLabelText('Branch Name (Bangla)', {
        selector: 'input',
      });
      await userEvent.click(branchNameBanglaInput, {
        delay: 100,
      });

      const branchLocationInput = canvas.getByLabelText('Branch Location',{ selector:'input',});
      await userEvent.click(branchLocationInput, {delay:100})

      const branchManagerInput=canvas.getByLabelText('Branch Manager', {selector:'input'} );
      await userEvent.click(branchManagerInput,{delay:100})

      const counterNumberInput=canvas.getByLabelText('Counter Numbers',{selector:'input'});
      await userEvent.click(counterNumberInput,{delay:100})
  
     
      const saveButton = canvas.getByTestId('Save')
      expect(saveButton.getAttribute('disabled')).toBe('true');
  
      const branchNameError = canvas.getByTestId('branchNameError')
      expect(branchNameError.textContent).toBe(' Branch name is required');
  
      const branchNameBnError = canvas.getByTestId('branchNameBnError')
      expect(branchNameBnError.textContent).toBe(' Branch name Bengali is required');
      
      const branchLocationError=canvas.getByTestId('branchLocationError');
      expect(branchLocationError.textContent).toBe('Branch Location is required');

      const branchManagerError=canvas.getByTestId('branchManagerError');
      expect (branchManagerError.textContent).toBe('Manager is required');

      const counterNumberError=canvas.getByTestId('counterNumberError');
      expect (counterNumberError.textContent).toBe('Counter Number is required');
  
    }
  }

  export const ValidFormWithPlay: Story = {
    args: {
      
    },
    play: async ({ canvasElement }) => {
  
      const canvas = within(canvasElement);
  
      const branchNameInput = canvas.getByLabelText('Branch Name', {
        selector: 'input',
      });
      await userEvent.type(branchNameInput, 'Mirpur 10', {
        delay: 100,
      });
  
      const branchNameBanglaInput = canvas.getByLabelText('Branch Name (Bangla)', {
        selector: 'input',
      });
      await userEvent.type(branchNameBanglaInput, 'মিরপুর ১০', {
        delay: 100,
      });

      const branchLocationInput=canvas.getByLabelText('Branch Location',{selector:'input'});
      await userEvent.type(branchLocationInput,'Mirpur 1 Market', {delay:100})

      const branchManagerInput=canvas.getByLabelText('Branch Manager',{selector:'input'});
      await userEvent.type(branchManagerInput,'Rafiul Haque',{delay:200});

      const counterNumberInput=canvas.getByLabelText('Counter Numbers',{selector:'input'});
      await userEvent.type(counterNumberInput,'1',{delay:100})
  
    
      const saveButton = canvas.getByTestId('Save');
      await userEvent.click(saveButton);
  
     
  
    },
  }