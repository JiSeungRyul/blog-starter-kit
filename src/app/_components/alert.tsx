import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              이 페이지는 미리보기입니다.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                여기를 클릭
              </a>
              하여 미리보기 모드를 종료하세요.
            </>
          ) : (
            <>
              이 블로그의 소스 코드는{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                GitHub에서 확인
              </a>
              할 수 있습니다.
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
