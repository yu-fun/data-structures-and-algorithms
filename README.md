# data-structures-and-algorithms

Data Structures and Algorithms

### pptx

隐藏按钮及分页

```less
#pptx-wrapper {
  .pptx-preview-wrapper {
    background: transparent !important;
  }
  .pptx-preview-wrapper-next,
  .pptx-preview-wrapper-pagination {
    display: none;
  }
}
```

```jsx
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useRef, useState } from 'react';
import { init } from 'pptx-preview';
import PPTXPreviewer from 'pptx-preview/dist/previewer';

const PptxPrview: React.FC = () => {
  const pptxPrviewerRef = useRef<PPTXPreviewer>();
  const [curIndex, setCurIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  useEffect(() => {
    // 调用库的init方法生成一个预览器
    let pptxPrviewer = init(document.getElementById('pptx-wrapper')!, {
      width: 960,
      height: 720,
      mode: 'slide',
    });

    pptxPrviewerRef.current = pptxPrviewer;

    fetch('/1718881197_eFhlh.pptx')
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((res) => {
        pptxPrviewer.preview(res);

        setTimeout(() => {
          const count = pptxPrviewerRef.current?.slideCount;
          setSlideCount(count || 0);
        }, 100);
      });
  }, []);
  return (
    <PageContainer>
      <div id="pptx-page">
        {curIndex + 1}/{slideCount}
      </div>
      {curIndex !== 0 && (
        <button
          type="button"
          onClick={() => {
            pptxPrviewerRef.current?.renderPreSlide();
            setCurIndex(pptxPrviewerRef.current!.currentIndex);
          }}
        >
          上一页
        </button>
      )}

      {curIndex !== slideCount - 1 && (
        <button
          type="button"
          onClick={() => {
            pptxPrviewerRef.current?.renderNextSlide();
            setCurIndex(pptxPrviewerRef.current!.currentIndex);
          }}
        >
          下一页
        </button>
      )}

      <div id="pptx-wrapper"></div>
    </PageContainer>
  );
};

export default PptxPrview;
```
