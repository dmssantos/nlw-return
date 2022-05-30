import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface submitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot: string;
}

export class submitFeedbackUseCase {
  constructor (
   private feedbacksRepository: FeedbacksRepository
  ) {}

  async excute(request: submitFeedbackUseCaseRequest) {
    const {type, comment, screenshot} = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })
  }
}