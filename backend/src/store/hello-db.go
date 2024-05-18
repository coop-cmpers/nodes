package store

import (
	"context"
	"database/sql"
	"log"
	"time"

	pb "github.com/coop-cmpers/what2do-backend/protos-gen/helloworld/v1"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type HelloRow struct {
	ID             int32
	RandomString   string
	RandomInteger  int64
	RandomDatetime time.Time
}

func (s *Store) HelloDB(ctx context.Context, id int32) (*pb.TestDBObject, error) {
	row := s.db.QueryRow(`SELECT * FROM test_table WHERE id = $1;`, id)

	var helloRow HelloRow
	err := row.Scan(&helloRow.ID, &helloRow.RandomString, &helloRow.RandomInteger, &helloRow.RandomDatetime)
	if err == sql.ErrNoRows {
		return &pb.TestDBObject{}, nil
	}
	if err != nil {
		log.Fatalf("Failed to query test_table with id %d - err: %v", id, err)
		return nil, err
	}

	resp := &pb.TestDBObject{
		Id:             helloRow.ID,
		RandomString:   helloRow.RandomString,
		RandomInteger:  helloRow.RandomInteger,
		RandomDatetime: timestamppb.New(helloRow.RandomDatetime),
	}

	return resp, nil
}
