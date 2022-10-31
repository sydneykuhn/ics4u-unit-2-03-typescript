/**
 * The program is a class.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-31
 */

class SydneyStack {
  // Create Array
  private readonly stackClass: number[] = []

  // Return array
  StackArray(): number[] {
    return this.stackClass
  }

  // Push Method
  Push(pushedNum: number): void {
    this.stackClass.push(pushedNum)
  }

  // Pop Method
  Pop(): number | undefined | string {
    if (this.stackClass.length !== 0) {
      return this.stackClass.pop()
    } else {
      return 'Nothing'
    }
  }
}

// Export File
export = SydneyStack
