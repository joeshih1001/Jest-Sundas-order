import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checkbox and confirm button initial", () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole("checkbox", {name:/terms and conditions/i}) // 確保大小寫都可以讀取
    const button = screen.getByRole('button',{name:/confirm order/i})

    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
})

test("click checkbox button should be enable and second click should be disable", () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole("checkbox", {name:/terms and conditions/i})
    const button = screen.getByRole('button',{name:/confirm order/i})
    fireEvent.click(checkbox)
    expect(button).toBeEnabled()

    fireEvent.click(checkbox)
    expect(button).toBeDisabled()
})