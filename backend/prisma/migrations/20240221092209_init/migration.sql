-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_employeeid_fkey" FOREIGN KEY ("employeeid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
