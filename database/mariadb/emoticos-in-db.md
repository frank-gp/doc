```ts
  @Column({ length: 255, charset: "utf8mb4", collation: "utf8mb4_unicode_ci" })
  labelLesson: string;

  @Column({ length: 255, nullable: true, charset: "utf8mb4", collation: "utf8mb4_unicode_ci" })
  titleLesson: string;

  @Column({ type: "text", nullable: true, charset: "utf8mb4", collation: "utf8mb4_unicode_ci" })
  descriptionLesson: string | null;
```
