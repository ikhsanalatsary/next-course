import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  numeric: any;
  timestamptz: any;
  timetz: any;
  uuid: any;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/**
 * Daftar jadwal kursus yang diselenggarakan
 *
 *
 * columns and relationships of "courseEvents"
 */
export type CourseEvents = Node & {
  __typename?: 'courseEvents';
  /** An object relationship */
  course: Courses;
  courseId: Scalars['bigint'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate: Scalars['date'];
  endTime: Scalars['timetz'];
  id: Scalars['ID'];
  /** An object relationship */
  location: Locations;
  locationId: Scalars['bigint'];
  publicId: Scalars['uuid'];
  startDate: Scalars['date'];
  startTime: Scalars['timetz'];
  /** An array relationship */
  studentToCourseEvents: Array<StudentToCourseEvents>;
  /** An aggregated array relationship */
  studentToCourseEvents_aggregate: StudentToCourseEvents_Aggregate;
  /** An array relationship connection */
  studentToCourseEvents_connection: StudentToCourseEventsConnection;
  /** An object relationship */
  teacher: Teachers;
  teacherId: Scalars['bigint'];
  updatedAt: Scalars['timestamptz'];
};


/**
 * Daftar jadwal kursus yang diselenggarakan
 *
 *
 * columns and relationships of "courseEvents"
 */
export type CourseEventsStudentToCourseEventsArgs = {
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};


/**
 * Daftar jadwal kursus yang diselenggarakan
 *
 *
 * columns and relationships of "courseEvents"
 */
export type CourseEventsStudentToCourseEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};


/**
 * Daftar jadwal kursus yang diselenggarakan
 *
 *
 * columns and relationships of "courseEvents"
 */
export type CourseEventsStudentToCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};

/** A Relay Connection object on "courseEvents" */
export type CourseEventsConnection = {
  __typename?: 'courseEventsConnection';
  edges: Array<CourseEventsEdge>;
  pageInfo: PageInfo;
};

export type CourseEventsEdge = {
  __typename?: 'courseEventsEdge';
  cursor: Scalars['String'];
  node: CourseEvents;
};

/** aggregated selection of "courseEvents" */
export type CourseEvents_Aggregate = {
  __typename?: 'courseEvents_aggregate';
  aggregate?: Maybe<CourseEvents_Aggregate_Fields>;
  nodes: Array<CourseEvents>;
};

/** aggregate fields of "courseEvents" */
export type CourseEvents_Aggregate_Fields = {
  __typename?: 'courseEvents_aggregate_fields';
  avg?: Maybe<CourseEvents_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CourseEvents_Max_Fields>;
  min?: Maybe<CourseEvents_Min_Fields>;
  stddev?: Maybe<CourseEvents_Stddev_Fields>;
  stddev_pop?: Maybe<CourseEvents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<CourseEvents_Stddev_Samp_Fields>;
  sum?: Maybe<CourseEvents_Sum_Fields>;
  var_pop?: Maybe<CourseEvents_Var_Pop_Fields>;
  var_samp?: Maybe<CourseEvents_Var_Samp_Fields>;
  variance?: Maybe<CourseEvents_Variance_Fields>;
};


/** aggregate fields of "courseEvents" */
export type CourseEvents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CourseEvents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courseEvents" */
export type CourseEvents_Aggregate_Order_By = {
  avg?: Maybe<CourseEvents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<CourseEvents_Max_Order_By>;
  min?: Maybe<CourseEvents_Min_Order_By>;
  stddev?: Maybe<CourseEvents_Stddev_Order_By>;
  stddev_pop?: Maybe<CourseEvents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<CourseEvents_Stddev_Samp_Order_By>;
  sum?: Maybe<CourseEvents_Sum_Order_By>;
  var_pop?: Maybe<CourseEvents_Var_Pop_Order_By>;
  var_samp?: Maybe<CourseEvents_Var_Samp_Order_By>;
  variance?: Maybe<CourseEvents_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "courseEvents" */
export type CourseEvents_Arr_Rel_Insert_Input = {
  data: Array<CourseEvents_Insert_Input>;
  on_conflict?: Maybe<CourseEvents_On_Conflict>;
};

/** aggregate avg on columns */
export type CourseEvents_Avg_Fields = {
  __typename?: 'courseEvents_avg_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courseEvents" */
export type CourseEvents_Avg_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "courseEvents". All fields are combined with a logical 'AND'. */
export type CourseEvents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<CourseEvents_Bool_Exp>>>;
  _not?: Maybe<CourseEvents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CourseEvents_Bool_Exp>>>;
  course?: Maybe<Courses_Bool_Exp>;
  courseId?: Maybe<Bigint_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  endDate?: Maybe<Date_Comparison_Exp>;
  endTime?: Maybe<Timetz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  location?: Maybe<Locations_Bool_Exp>;
  locationId?: Maybe<Bigint_Comparison_Exp>;
  publicId?: Maybe<Uuid_Comparison_Exp>;
  startDate?: Maybe<Date_Comparison_Exp>;
  startTime?: Maybe<Timetz_Comparison_Exp>;
  studentToCourseEvents?: Maybe<StudentToCourseEvents_Bool_Exp>;
  teacher?: Maybe<Teachers_Bool_Exp>;
  teacherId?: Maybe<Bigint_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "courseEvents" */
export enum CourseEvents_Constraint {
  /** unique or primary key constraint */
  CourseEventsPkey = 'courseEvents_pkey',
  /** unique or primary key constraint */
  CourseEventsPublicIdKey = 'courseEvents_public_id_key'
}

/** input type for incrementing integer column in table "courseEvents" */
export type CourseEvents_Inc_Input = {
  courseId?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  locationId?: Maybe<Scalars['bigint']>;
  teacherId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "courseEvents" */
export type CourseEvents_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  courseId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate?: Maybe<Scalars['date']>;
  endTime?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['bigint']>;
  location?: Maybe<Locations_Obj_Rel_Insert_Input>;
  locationId?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['date']>;
  startTime?: Maybe<Scalars['timetz']>;
  studentToCourseEvents?: Maybe<StudentToCourseEvents_Arr_Rel_Insert_Input>;
  teacher?: Maybe<Teachers_Obj_Rel_Insert_Input>;
  teacherId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CourseEvents_Max_Fields = {
  __typename?: 'courseEvents_max_fields';
  courseId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate?: Maybe<Scalars['date']>;
  endTime?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['bigint']>;
  locationId?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['date']>;
  startTime?: Maybe<Scalars['timetz']>;
  teacherId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "courseEvents" */
export type CourseEvents_Max_Order_By = {
  courseId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type CourseEvents_Min_Fields = {
  __typename?: 'courseEvents_min_fields';
  courseId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate?: Maybe<Scalars['date']>;
  endTime?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['bigint']>;
  locationId?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['date']>;
  startTime?: Maybe<Scalars['timetz']>;
  teacherId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "courseEvents" */
export type CourseEvents_Min_Order_By = {
  courseId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "courseEvents" */
export type CourseEvents_Mutation_Response = {
  __typename?: 'courseEvents_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<CourseEvents>;
};

/** input type for inserting object relation for remote table "courseEvents" */
export type CourseEvents_Obj_Rel_Insert_Input = {
  data: CourseEvents_Insert_Input;
  on_conflict?: Maybe<CourseEvents_On_Conflict>;
};

/** on conflict condition type for table "courseEvents" */
export type CourseEvents_On_Conflict = {
  constraint: CourseEvents_Constraint;
  update_columns: Array<CourseEvents_Update_Column>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};

/** ordering options when selecting data from "courseEvents" */
export type CourseEvents_Order_By = {
  course?: Maybe<Courses_Order_By>;
  courseId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Locations_Order_By>;
  locationId?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
  studentToCourseEvents_aggregate?: Maybe<StudentToCourseEvents_Aggregate_Order_By>;
  teacher?: Maybe<Teachers_Order_By>;
  teacherId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "courseEvents" */
export type CourseEvents_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "courseEvents" */
export enum CourseEvents_Select_Column {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  EndTime = 'endTime',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "courseEvents" */
export type CourseEvents_Set_Input = {
  courseId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate?: Maybe<Scalars['date']>;
  endTime?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['bigint']>;
  locationId?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['date']>;
  startTime?: Maybe<Scalars['timetz']>;
  teacherId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type CourseEvents_Stddev_Fields = {
  __typename?: 'courseEvents_stddev_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courseEvents" */
export type CourseEvents_Stddev_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type CourseEvents_Stddev_Pop_Fields = {
  __typename?: 'courseEvents_stddev_pop_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courseEvents" */
export type CourseEvents_Stddev_Pop_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type CourseEvents_Stddev_Samp_Fields = {
  __typename?: 'courseEvents_stddev_samp_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courseEvents" */
export type CourseEvents_Stddev_Samp_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type CourseEvents_Sum_Fields = {
  __typename?: 'courseEvents_sum_fields';
  courseId?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  locationId?: Maybe<Scalars['bigint']>;
  teacherId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "courseEvents" */
export type CourseEvents_Sum_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** update columns of table "courseEvents" */
export enum CourseEvents_Update_Column {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  EndTime = 'endTime',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type CourseEvents_Var_Pop_Fields = {
  __typename?: 'courseEvents_var_pop_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courseEvents" */
export type CourseEvents_Var_Pop_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type CourseEvents_Var_Samp_Fields = {
  __typename?: 'courseEvents_var_samp_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courseEvents" */
export type CourseEvents_Var_Samp_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type CourseEvents_Variance_Fields = {
  __typename?: 'courseEvents_variance_fields';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courseEvents" */
export type CourseEvents_Variance_Order_By = {
  courseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  teacherId?: Maybe<Order_By>;
};

/**
 * Daftar informasi kursus
 *
 *
 * columns and relationships of "courses"
 */
export type Courses = Node & {
  __typename?: 'courses';
  /** An array relationship */
  courseEvents: Array<CourseEvents>;
  /** An aggregated array relationship */
  courseEvents_aggregate: CourseEvents_Aggregate;
  /** An array relationship connection */
  courseEvents_connection: CourseEventsConnection;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * Daftar informasi kursus
 *
 *
 * columns and relationships of "courses"
 */
export type CoursesCourseEventsArgs = {
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/**
 * Daftar informasi kursus
 *
 *
 * columns and relationships of "courses"
 */
export type CoursesCourseEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/**
 * Daftar informasi kursus
 *
 *
 * columns and relationships of "courses"
 */
export type CoursesCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};

/** A Relay Connection object on "courses" */
export type CoursesConnection = {
  __typename?: 'coursesConnection';
  edges: Array<CoursesEdge>;
  pageInfo: PageInfo;
};

export type CoursesEdge = {
  __typename?: 'coursesEdge';
  cursor: Scalars['String'];
  node: Courses;
};

/** aggregated selection of "courses" */
export type Courses_Aggregate = {
  __typename?: 'courses_aggregate';
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "courses" */
export type Courses_Aggregate_Fields = {
  __typename?: 'courses_aggregate_fields';
  avg?: Maybe<Courses_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
  stddev?: Maybe<Courses_Stddev_Fields>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Fields>;
  sum?: Maybe<Courses_Sum_Fields>;
  var_pop?: Maybe<Courses_Var_Pop_Fields>;
  var_samp?: Maybe<Courses_Var_Samp_Fields>;
  variance?: Maybe<Courses_Variance_Fields>;
};


/** aggregate fields of "courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses" */
export type Courses_Aggregate_Order_By = {
  avg?: Maybe<Courses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Max_Order_By>;
  min?: Maybe<Courses_Min_Order_By>;
  stddev?: Maybe<Courses_Stddev_Order_By>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Order_By>;
  sum?: Maybe<Courses_Sum_Order_By>;
  var_pop?: Maybe<Courses_Var_Pop_Order_By>;
  var_samp?: Maybe<Courses_Var_Samp_Order_By>;
  variance?: Maybe<Courses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "courses" */
export type Courses_Arr_Rel_Insert_Input = {
  data: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** aggregate avg on columns */
export type Courses_Avg_Fields = {
  __typename?: 'courses_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courses" */
export type Courses_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Courses_Bool_Exp>>>;
  _not?: Maybe<Courses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Courses_Bool_Exp>>>;
  courseEvents?: Maybe<CourseEvents_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  publicId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses" */
export enum Courses_Constraint {
  /** unique or primary key constraint */
  CoursesPkey = 'courses_pkey',
  /** unique or primary key constraint */
  CoursesPublicIdKey = 'courses_public_id_key'
}

/** input type for incrementing integer column in table "courses" */
export type Courses_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "courses" */
export type Courses_Insert_Input = {
  courseEvents?: Maybe<CourseEvents_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Courses_Max_Fields = {
  __typename?: 'courses_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "courses" */
export type Courses_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  __typename?: 'courses_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "courses" */
export type Courses_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "courses" */
export type Courses_Mutation_Response = {
  __typename?: 'courses_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Courses>;
};

/** input type for inserting object relation for remote table "courses" */
export type Courses_Obj_Rel_Insert_Input = {
  data: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** on conflict condition type for table "courses" */
export type Courses_On_Conflict = {
  constraint: Courses_Constraint;
  update_columns: Array<Courses_Update_Column>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** ordering options when selecting data from "courses" */
export type Courses_Order_By = {
  courseEvents_aggregate?: Maybe<CourseEvents_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "courses" */
export type Courses_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "courses" */
export enum Courses_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "courses" */
export type Courses_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Courses_Stddev_Fields = {
  __typename?: 'courses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courses" */
export type Courses_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Courses_Stddev_Pop_Fields = {
  __typename?: 'courses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courses" */
export type Courses_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Courses_Stddev_Samp_Fields = {
  __typename?: 'courses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courses" */
export type Courses_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Courses_Sum_Fields = {
  __typename?: 'courses_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "courses" */
export type Courses_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "courses" */
export enum Courses_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Courses_Var_Pop_Fields = {
  __typename?: 'courses_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courses" */
export type Courses_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Courses_Var_Samp_Fields = {
  __typename?: 'courses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courses" */
export type Courses_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Courses_Variance_Fields = {
  __typename?: 'courses_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courses" */
export type Courses_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/**
 * data lokasi
 *
 *
 * columns and relationships of "locations"
 */
export type Locations = Node & {
  __typename?: 'locations';
  address: Scalars['String'];
  /** An array relationship */
  courseEvents: Array<CourseEvents>;
  /** An aggregated array relationship */
  courseEvents_aggregate: CourseEvents_Aggregate;
  /** An array relationship connection */
  courseEvents_connection: CourseEventsConnection;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
  name: Scalars['String'];
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * data lokasi
 *
 *
 * columns and relationships of "locations"
 */
export type LocationsCourseEventsArgs = {
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/**
 * data lokasi
 *
 *
 * columns and relationships of "locations"
 */
export type LocationsCourseEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/**
 * data lokasi
 *
 *
 * columns and relationships of "locations"
 */
export type LocationsCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};

/** A Relay Connection object on "locations" */
export type LocationsConnection = {
  __typename?: 'locationsConnection';
  edges: Array<LocationsEdge>;
  pageInfo: PageInfo;
};

export type LocationsEdge = {
  __typename?: 'locationsEdge';
  cursor: Scalars['String'];
  node: Locations;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  avg?: Maybe<Locations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
  stddev?: Maybe<Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Locations_Sum_Fields>;
  var_pop?: Maybe<Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Locations_Var_Samp_Fields>;
  variance?: Maybe<Locations_Variance_Fields>;
};


/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Locations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "locations" */
export type Locations_Aggregate_Order_By = {
  avg?: Maybe<Locations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Locations_Max_Order_By>;
  min?: Maybe<Locations_Min_Order_By>;
  stddev?: Maybe<Locations_Stddev_Order_By>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Order_By>;
  sum?: Maybe<Locations_Sum_Order_By>;
  var_pop?: Maybe<Locations_Var_Pop_Order_By>;
  var_samp?: Maybe<Locations_Var_Samp_Order_By>;
  variance?: Maybe<Locations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "locations" */
export type Locations_Arr_Rel_Insert_Input = {
  data: Array<Locations_Insert_Input>;
  on_conflict?: Maybe<Locations_On_Conflict>;
};

/** aggregate avg on columns */
export type Locations_Avg_Fields = {
  __typename?: 'locations_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "locations" */
export type Locations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Locations_Bool_Exp>>>;
  _not?: Maybe<Locations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Locations_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  courseEvents?: Maybe<CourseEvents_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  latitude?: Maybe<Numeric_Comparison_Exp>;
  longitude?: Maybe<Numeric_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  publicId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint */
  LocationsPkey = 'locations_pkey',
  /** unique or primary key constraint */
  LocationsPublicIdKey = 'locations_public_id_key'
}

/** input type for incrementing integer column in table "locations" */
export type Locations_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  courseEvents?: Maybe<CourseEvents_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "locations" */
export type Locations_Max_Order_By = {
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "locations" */
export type Locations_Min_Order_By = {
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  on_conflict?: Maybe<Locations_On_Conflict>;
};

/** on conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns: Array<Locations_Update_Column>;
  where?: Maybe<Locations_Bool_Exp>;
};

/** ordering options when selecting data from "locations" */
export type Locations_Order_By = {
  address?: Maybe<Order_By>;
  courseEvents_aggregate?: Maybe<CourseEvents_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "locations" */
export type Locations_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Locations_Stddev_Fields = {
  __typename?: 'locations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "locations" */
export type Locations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Locations_Stddev_Pop_Fields = {
  __typename?: 'locations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "locations" */
export type Locations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Locations_Stddev_Samp_Fields = {
  __typename?: 'locations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "locations" */
export type Locations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Locations_Sum_Fields = {
  __typename?: 'locations_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "locations" */
export type Locations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Locations_Var_Pop_Fields = {
  __typename?: 'locations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "locations" */
export type Locations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Locations_Var_Samp_Fields = {
  __typename?: 'locations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "locations" */
export type Locations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Locations_Variance_Fields = {
  __typename?: 'locations_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "locations" */
export type Locations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "locations" */
  deleteById?: Maybe<Locations>;
  /** delete data from the table: "courses" */
  deleteCourse?: Maybe<Courses_Mutation_Response>;
  /** delete single row from the table: "courses" */
  deleteCourseById?: Maybe<Courses>;
  /** delete data from the table: "courseEvents" */
  deleteCourseEvent?: Maybe<CourseEvents_Mutation_Response>;
  /** delete single row from the table: "courseEvents" */
  deleteCourseEventById?: Maybe<CourseEvents>;
  /** delete data from the table: "locations" */
  deleteLocation?: Maybe<Locations_Mutation_Response>;
  /** delete data from the table: "students" */
  deleteStudent?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "students" */
  deleteStudentById?: Maybe<Students>;
  /** delete data from the table: "studentToCourseEvents" */
  deleteStudentToCourseEvent?: Maybe<StudentToCourseEvents_Mutation_Response>;
  /** delete single row from the table: "studentToCourseEvents" */
  deleteStudentToCourseEventById?: Maybe<StudentToCourseEvents>;
  /** delete data from the table: "teachers" */
  deleteTeacher?: Maybe<Teachers_Mutation_Response>;
  /** delete single row from the table: "teachers" */
  deleteTeacherById?: Maybe<Teachers>;
  /** insert data into the table: "courses" */
  insertCourse?: Maybe<Courses_Mutation_Response>;
  /** insert data into the table: "courseEvents" */
  insertCourseEvent?: Maybe<CourseEvents_Mutation_Response>;
  /** insert a single row into the table: "courseEvents" */
  insertCourseEventOne?: Maybe<CourseEvents>;
  /** insert a single row into the table: "courses" */
  insertCourseOne?: Maybe<Courses>;
  /** insert data into the table: "locations" */
  insertLocation?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insertLocationOne?: Maybe<Locations>;
  /** insert data into the table: "students" */
  insertStudent?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "students" */
  insertStudentOne?: Maybe<Students>;
  /** insert data into the table: "studentToCourseEvents" */
  insertStudentToCourseEvent?: Maybe<StudentToCourseEvents_Mutation_Response>;
  /** insert a single row into the table: "studentToCourseEvents" */
  insertStudentToCourseEventOne?: Maybe<StudentToCourseEvents>;
  /** insert data into the table: "teachers" */
  insertTeacher?: Maybe<Teachers_Mutation_Response>;
  /** insert a single row into the table: "teachers" */
  insertTeacherOne?: Maybe<Teachers>;
  /** update single row of the table: "locations" */
  updateById?: Maybe<Locations>;
  /** update data of the table: "courses" */
  updateCourse?: Maybe<Courses_Mutation_Response>;
  /** update single row of the table: "courses" */
  updateCourseById?: Maybe<Courses>;
  /** update data of the table: "courseEvents" */
  updateCourseEvent?: Maybe<CourseEvents_Mutation_Response>;
  /** update single row of the table: "courseEvents" */
  updateCourseEventById?: Maybe<CourseEvents>;
  /** update data of the table: "locations" */
  updateLocation?: Maybe<Locations_Mutation_Response>;
  /** update data of the table: "students" */
  updateStudent?: Maybe<Students_Mutation_Response>;
  /** update single row of the table: "students" */
  updateStudentById?: Maybe<Students>;
  /** update data of the table: "studentToCourseEvents" */
  updateStudentToCourseEvent?: Maybe<StudentToCourseEvents_Mutation_Response>;
  /** update single row of the table: "studentToCourseEvents" */
  updateStudentToCourseEventById?: Maybe<StudentToCourseEvents>;
  /** update data of the table: "teachers" */
  updateTeacher?: Maybe<Teachers_Mutation_Response>;
  /** update single row of the table: "teachers" */
  updateTeacherById?: Maybe<Teachers>;
};


/** mutation root */
export type Mutation_RootDeleteByIdArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDeleteCourseArgs = {
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCourseByIdArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDeleteCourseEventArgs = {
  where: CourseEvents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCourseEventByIdArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDeleteLocationArgs = {
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteStudentArgs = {
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteStudentByIdArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDeleteStudentToCourseEventArgs = {
  where: StudentToCourseEvents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteStudentToCourseEventByIdArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDeleteTeacherArgs = {
  where: Teachers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTeacherByIdArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsertCourseArgs = {
  objects: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseEventArgs = {
  objects: Array<CourseEvents_Insert_Input>;
  on_conflict?: Maybe<CourseEvents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseEventOneArgs = {
  object: CourseEvents_Insert_Input;
  on_conflict?: Maybe<CourseEvents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseOneArgs = {
  object: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertLocationArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: Maybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertLocationOneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: Maybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertStudentArgs = {
  objects: Array<Students_Insert_Input>;
  on_conflict?: Maybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertStudentOneArgs = {
  object: Students_Insert_Input;
  on_conflict?: Maybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertStudentToCourseEventArgs = {
  objects: Array<StudentToCourseEvents_Insert_Input>;
  on_conflict?: Maybe<StudentToCourseEvents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertStudentToCourseEventOneArgs = {
  object: StudentToCourseEvents_Insert_Input;
  on_conflict?: Maybe<StudentToCourseEvents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTeacherArgs = {
  objects: Array<Teachers_Insert_Input>;
  on_conflict?: Maybe<Teachers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTeacherOneArgs = {
  object: Teachers_Insert_Input;
  on_conflict?: Maybe<Teachers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateByIdArgs = {
  _inc?: Maybe<Locations_Inc_Input>;
  _set?: Maybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCourseArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCourseByIdArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  pk_columns: Courses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCourseEventArgs = {
  _inc?: Maybe<CourseEvents_Inc_Input>;
  _set?: Maybe<CourseEvents_Set_Input>;
  where: CourseEvents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCourseEventByIdArgs = {
  _inc?: Maybe<CourseEvents_Inc_Input>;
  _set?: Maybe<CourseEvents_Set_Input>;
  pk_columns: CourseEvents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateLocationArgs = {
  _inc?: Maybe<Locations_Inc_Input>;
  _set?: Maybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateStudentArgs = {
  _inc?: Maybe<Students_Inc_Input>;
  _set?: Maybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateStudentByIdArgs = {
  _inc?: Maybe<Students_Inc_Input>;
  _set?: Maybe<Students_Set_Input>;
  pk_columns: Students_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateStudentToCourseEventArgs = {
  _inc?: Maybe<StudentToCourseEvents_Inc_Input>;
  _set?: Maybe<StudentToCourseEvents_Set_Input>;
  where: StudentToCourseEvents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateStudentToCourseEventByIdArgs = {
  _inc?: Maybe<StudentToCourseEvents_Inc_Input>;
  _set?: Maybe<StudentToCourseEvents_Set_Input>;
  pk_columns: StudentToCourseEvents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTeacherArgs = {
  _inc?: Maybe<Teachers_Inc_Input>;
  _set?: Maybe<Teachers_Set_Input>;
  where: Teachers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTeacherByIdArgs = {
  _inc?: Maybe<Teachers_Inc_Input>;
  _set?: Maybe<Teachers_Set_Input>;
  pk_columns: Teachers_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "courseEvents" */
  courseEvents_connection: CourseEventsConnection;
  /** fetch data from the table: "courses" */
  courses_connection: CoursesConnection;
  /** fetch data from the table: "locations" */
  locations_connection: LocationsConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "studentToCourseEvents" */
  studentToCourseEvents_connection: StudentToCourseEventsConnection;
  /** fetch data from the table: "students" */
  students_connection: StudentsConnection;
  /** fetch data from the table: "teachers" */
  teachers_connection: TeachersConnection;
};


/** query root */
export type Query_RootCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/** query root */
export type Query_RootCourses_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** query root */
export type Query_RootLocations_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Locations_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locations_Order_By>>;
  where?: Maybe<Locations_Bool_Exp>;
};


/** query root */
export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};


/** query root */
export type Query_RootStudentToCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};


/** query root */
export type Query_RootStudents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Students_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Students_Order_By>>;
  where?: Maybe<Students_Bool_Exp>;
};


/** query root */
export type Query_RootTeachers_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Teachers_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teachers_Order_By>>;
  where?: Maybe<Teachers_Bool_Exp>;
};

/**
 * Daftar siswa yang mengikuti kursus
 *
 *
 * columns and relationships of "studentToCourseEvents"
 */
export type StudentToCourseEvents = Node & {
  __typename?: 'studentToCourseEvents';
  /** An object relationship */
  courseEvent: CourseEvents;
  courseEventId: Scalars['bigint'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['ID'];
  publicId: Scalars['uuid'];
  /** An object relationship */
  student: Students;
  studentId: Scalars['bigint'];
  updatedAt: Scalars['timestamptz'];
};

/** A Relay Connection object on "studentToCourseEvents" */
export type StudentToCourseEventsConnection = {
  __typename?: 'studentToCourseEventsConnection';
  edges: Array<StudentToCourseEventsEdge>;
  pageInfo: PageInfo;
};

export type StudentToCourseEventsEdge = {
  __typename?: 'studentToCourseEventsEdge';
  cursor: Scalars['String'];
  node: StudentToCourseEvents;
};

/** aggregated selection of "studentToCourseEvents" */
export type StudentToCourseEvents_Aggregate = {
  __typename?: 'studentToCourseEvents_aggregate';
  aggregate?: Maybe<StudentToCourseEvents_Aggregate_Fields>;
  nodes: Array<StudentToCourseEvents>;
};

/** aggregate fields of "studentToCourseEvents" */
export type StudentToCourseEvents_Aggregate_Fields = {
  __typename?: 'studentToCourseEvents_aggregate_fields';
  avg?: Maybe<StudentToCourseEvents_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StudentToCourseEvents_Max_Fields>;
  min?: Maybe<StudentToCourseEvents_Min_Fields>;
  stddev?: Maybe<StudentToCourseEvents_Stddev_Fields>;
  stddev_pop?: Maybe<StudentToCourseEvents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<StudentToCourseEvents_Stddev_Samp_Fields>;
  sum?: Maybe<StudentToCourseEvents_Sum_Fields>;
  var_pop?: Maybe<StudentToCourseEvents_Var_Pop_Fields>;
  var_samp?: Maybe<StudentToCourseEvents_Var_Samp_Fields>;
  variance?: Maybe<StudentToCourseEvents_Variance_Fields>;
};


/** aggregate fields of "studentToCourseEvents" */
export type StudentToCourseEvents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "studentToCourseEvents" */
export type StudentToCourseEvents_Aggregate_Order_By = {
  avg?: Maybe<StudentToCourseEvents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<StudentToCourseEvents_Max_Order_By>;
  min?: Maybe<StudentToCourseEvents_Min_Order_By>;
  stddev?: Maybe<StudentToCourseEvents_Stddev_Order_By>;
  stddev_pop?: Maybe<StudentToCourseEvents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<StudentToCourseEvents_Stddev_Samp_Order_By>;
  sum?: Maybe<StudentToCourseEvents_Sum_Order_By>;
  var_pop?: Maybe<StudentToCourseEvents_Var_Pop_Order_By>;
  var_samp?: Maybe<StudentToCourseEvents_Var_Samp_Order_By>;
  variance?: Maybe<StudentToCourseEvents_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "studentToCourseEvents" */
export type StudentToCourseEvents_Arr_Rel_Insert_Input = {
  data: Array<StudentToCourseEvents_Insert_Input>;
  on_conflict?: Maybe<StudentToCourseEvents_On_Conflict>;
};

/** aggregate avg on columns */
export type StudentToCourseEvents_Avg_Fields = {
  __typename?: 'studentToCourseEvents_avg_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Avg_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "studentToCourseEvents". All fields are combined with a logical 'AND'. */
export type StudentToCourseEvents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<StudentToCourseEvents_Bool_Exp>>>;
  _not?: Maybe<StudentToCourseEvents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<StudentToCourseEvents_Bool_Exp>>>;
  courseEvent?: Maybe<CourseEvents_Bool_Exp>;
  courseEventId?: Maybe<Bigint_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  publicId?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Students_Bool_Exp>;
  studentId?: Maybe<Bigint_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "studentToCourseEvents" */
export enum StudentToCourseEvents_Constraint {
  /** unique or primary key constraint */
  StudentToCourseEventsPkey = 'studentToCourseEvents_pkey',
  /** unique or primary key constraint */
  StudentToCourseEventsPublicIdKey = 'studentToCourseEvents_public_id_key'
}

/** input type for incrementing integer column in table "studentToCourseEvents" */
export type StudentToCourseEvents_Inc_Input = {
  courseEventId?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  studentId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "studentToCourseEvents" */
export type StudentToCourseEvents_Insert_Input = {
  courseEvent?: Maybe<CourseEvents_Obj_Rel_Insert_Input>;
  courseEventId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  student?: Maybe<Students_Obj_Rel_Insert_Input>;
  studentId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type StudentToCourseEvents_Max_Fields = {
  __typename?: 'studentToCourseEvents_max_fields';
  courseEventId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  studentId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Max_Order_By = {
  courseEventId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type StudentToCourseEvents_Min_Fields = {
  __typename?: 'studentToCourseEvents_min_fields';
  courseEventId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  studentId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Min_Order_By = {
  courseEventId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "studentToCourseEvents" */
export type StudentToCourseEvents_Mutation_Response = {
  __typename?: 'studentToCourseEvents_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<StudentToCourseEvents>;
};

/** input type for inserting object relation for remote table "studentToCourseEvents" */
export type StudentToCourseEvents_Obj_Rel_Insert_Input = {
  data: StudentToCourseEvents_Insert_Input;
  on_conflict?: Maybe<StudentToCourseEvents_On_Conflict>;
};

/** on conflict condition type for table "studentToCourseEvents" */
export type StudentToCourseEvents_On_Conflict = {
  constraint: StudentToCourseEvents_Constraint;
  update_columns: Array<StudentToCourseEvents_Update_Column>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};

/** ordering options when selecting data from "studentToCourseEvents" */
export type StudentToCourseEvents_Order_By = {
  courseEvent?: Maybe<CourseEvents_Order_By>;
  courseEventId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  student?: Maybe<Students_Order_By>;
  studentId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "studentToCourseEvents" */
export type StudentToCourseEvents_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "studentToCourseEvents" */
export enum StudentToCourseEvents_Select_Column {
  /** column name */
  CourseEventId = 'courseEventId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "studentToCourseEvents" */
export type StudentToCourseEvents_Set_Input = {
  courseEventId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  publicId?: Maybe<Scalars['uuid']>;
  studentId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type StudentToCourseEvents_Stddev_Fields = {
  __typename?: 'studentToCourseEvents_stddev_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Stddev_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type StudentToCourseEvents_Stddev_Pop_Fields = {
  __typename?: 'studentToCourseEvents_stddev_pop_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Stddev_Pop_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type StudentToCourseEvents_Stddev_Samp_Fields = {
  __typename?: 'studentToCourseEvents_stddev_samp_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Stddev_Samp_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type StudentToCourseEvents_Sum_Fields = {
  __typename?: 'studentToCourseEvents_sum_fields';
  courseEventId?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  studentId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Sum_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** update columns of table "studentToCourseEvents" */
export enum StudentToCourseEvents_Update_Column {
  /** column name */
  CourseEventId = 'courseEventId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type StudentToCourseEvents_Var_Pop_Fields = {
  __typename?: 'studentToCourseEvents_var_pop_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Var_Pop_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type StudentToCourseEvents_Var_Samp_Fields = {
  __typename?: 'studentToCourseEvents_var_samp_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Var_Samp_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type StudentToCourseEvents_Variance_Fields = {
  __typename?: 'studentToCourseEvents_variance_fields';
  courseEventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "studentToCourseEvents" */
export type StudentToCourseEvents_Variance_Order_By = {
  courseEventId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  studentId?: Maybe<Order_By>;
};

/**
 * Daftar informasi siswa
 *
 *
 * columns and relationships of "students"
 */
export type Students = Node & {
  __typename?: 'students';
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  studentToCourseEvents: Array<StudentToCourseEvents>;
  /** An aggregated array relationship */
  studentToCourseEvents_aggregate: StudentToCourseEvents_Aggregate;
  /** An array relationship connection */
  studentToCourseEvents_connection: StudentToCourseEventsConnection;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * Daftar informasi siswa
 *
 *
 * columns and relationships of "students"
 */
export type StudentsStudentToCourseEventsArgs = {
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};


/**
 * Daftar informasi siswa
 *
 *
 * columns and relationships of "students"
 */
export type StudentsStudentToCourseEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};


/**
 * Daftar informasi siswa
 *
 *
 * columns and relationships of "students"
 */
export type StudentsStudentToCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};

/** A Relay Connection object on "students" */
export type StudentsConnection = {
  __typename?: 'studentsConnection';
  edges: Array<StudentsEdge>;
  pageInfo: PageInfo;
};

export type StudentsEdge = {
  __typename?: 'studentsEdge';
  cursor: Scalars['String'];
  node: Students;
};

/** aggregated selection of "students" */
export type Students_Aggregate = {
  __typename?: 'students_aggregate';
  aggregate?: Maybe<Students_Aggregate_Fields>;
  nodes: Array<Students>;
};

/** aggregate fields of "students" */
export type Students_Aggregate_Fields = {
  __typename?: 'students_aggregate_fields';
  avg?: Maybe<Students_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Students_Max_Fields>;
  min?: Maybe<Students_Min_Fields>;
  stddev?: Maybe<Students_Stddev_Fields>;
  stddev_pop?: Maybe<Students_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Students_Stddev_Samp_Fields>;
  sum?: Maybe<Students_Sum_Fields>;
  var_pop?: Maybe<Students_Var_Pop_Fields>;
  var_samp?: Maybe<Students_Var_Samp_Fields>;
  variance?: Maybe<Students_Variance_Fields>;
};


/** aggregate fields of "students" */
export type Students_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Students_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "students" */
export type Students_Aggregate_Order_By = {
  avg?: Maybe<Students_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Students_Max_Order_By>;
  min?: Maybe<Students_Min_Order_By>;
  stddev?: Maybe<Students_Stddev_Order_By>;
  stddev_pop?: Maybe<Students_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Students_Stddev_Samp_Order_By>;
  sum?: Maybe<Students_Sum_Order_By>;
  var_pop?: Maybe<Students_Var_Pop_Order_By>;
  var_samp?: Maybe<Students_Var_Samp_Order_By>;
  variance?: Maybe<Students_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "students" */
export type Students_Arr_Rel_Insert_Input = {
  data: Array<Students_Insert_Input>;
  on_conflict?: Maybe<Students_On_Conflict>;
};

/** aggregate avg on columns */
export type Students_Avg_Fields = {
  __typename?: 'students_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "students" */
export type Students_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "students". All fields are combined with a logical 'AND'. */
export type Students_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Students_Bool_Exp>>>;
  _not?: Maybe<Students_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Students_Bool_Exp>>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  publicId?: Maybe<Uuid_Comparison_Exp>;
  studentToCourseEvents?: Maybe<StudentToCourseEvents_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "students" */
export enum Students_Constraint {
  /** unique or primary key constraint */
  StudentsPkey = 'students_pkey',
  /** unique or primary key constraint */
  StudentsPublicIdKey = 'students_public_id_key'
}

/** input type for incrementing integer column in table "students" */
export type Students_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "students" */
export type Students_Insert_Input = {
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  studentToCourseEvents?: Maybe<StudentToCourseEvents_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Students_Max_Fields = {
  __typename?: 'students_max_fields';
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "students" */
export type Students_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Students_Min_Fields = {
  __typename?: 'students_min_fields';
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "students" */
export type Students_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "students" */
export type Students_Mutation_Response = {
  __typename?: 'students_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Students>;
};

/** input type for inserting object relation for remote table "students" */
export type Students_Obj_Rel_Insert_Input = {
  data: Students_Insert_Input;
  on_conflict?: Maybe<Students_On_Conflict>;
};

/** on conflict condition type for table "students" */
export type Students_On_Conflict = {
  constraint: Students_Constraint;
  update_columns: Array<Students_Update_Column>;
  where?: Maybe<Students_Bool_Exp>;
};

/** ordering options when selecting data from "students" */
export type Students_Order_By = {
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  studentToCourseEvents_aggregate?: Maybe<StudentToCourseEvents_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "students" */
export type Students_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "students" */
export enum Students_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "students" */
export type Students_Set_Input = {
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Students_Stddev_Fields = {
  __typename?: 'students_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "students" */
export type Students_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Students_Stddev_Pop_Fields = {
  __typename?: 'students_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "students" */
export type Students_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Students_Stddev_Samp_Fields = {
  __typename?: 'students_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "students" */
export type Students_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Students_Sum_Fields = {
  __typename?: 'students_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "students" */
export type Students_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "students" */
export enum Students_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Students_Var_Pop_Fields = {
  __typename?: 'students_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "students" */
export type Students_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Students_Var_Samp_Fields = {
  __typename?: 'students_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "students" */
export type Students_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Students_Variance_Fields = {
  __typename?: 'students_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "students" */
export type Students_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "courseEvents" */
  courseEvents_connection: CourseEventsConnection;
  /** fetch data from the table: "courses" */
  courses_connection: CoursesConnection;
  /** fetch data from the table: "locations" */
  locations_connection: LocationsConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "studentToCourseEvents" */
  studentToCourseEvents_connection: StudentToCourseEventsConnection;
  /** fetch data from the table: "students" */
  students_connection: StudentsConnection;
  /** fetch data from the table: "teachers" */
  teachers_connection: TeachersConnection;
};


/** subscription root */
export type Subscription_RootCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourses_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocations_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Locations_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locations_Order_By>>;
  where?: Maybe<Locations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNodeArgs = {
  id: Scalars['ID'];
};


/** subscription root */
export type Subscription_RootStudentToCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<StudentToCourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StudentToCourseEvents_Order_By>>;
  where?: Maybe<StudentToCourseEvents_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStudents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Students_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Students_Order_By>>;
  where?: Maybe<Students_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeachers_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Teachers_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teachers_Order_By>>;
  where?: Maybe<Teachers_Bool_Exp>;
};

/**
 * Daftar informasi pengajar
 *
 *
 * columns and relationships of "teachers"
 */
export type Teachers = Node & {
  __typename?: 'teachers';
  birthday?: Maybe<Scalars['date']>;
  /** An array relationship */
  courseEvents: Array<CourseEvents>;
  /** An aggregated array relationship */
  courseEvents_aggregate: CourseEvents_Aggregate;
  /** An array relationship connection */
  courseEvents_connection: CourseEventsConnection;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicId?: Maybe<Scalars['uuid']>;
  skill?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * Daftar informasi pengajar
 *
 *
 * columns and relationships of "teachers"
 */
export type TeachersCourseEventsArgs = {
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/**
 * Daftar informasi pengajar
 *
 *
 * columns and relationships of "teachers"
 */
export type TeachersCourseEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};


/**
 * Daftar informasi pengajar
 *
 *
 * columns and relationships of "teachers"
 */
export type TeachersCourseEvents_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<CourseEvents_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CourseEvents_Order_By>>;
  where?: Maybe<CourseEvents_Bool_Exp>;
};

/** A Relay Connection object on "teachers" */
export type TeachersConnection = {
  __typename?: 'teachersConnection';
  edges: Array<TeachersEdge>;
  pageInfo: PageInfo;
};

export type TeachersEdge = {
  __typename?: 'teachersEdge';
  cursor: Scalars['String'];
  node: Teachers;
};

/** aggregated selection of "teachers" */
export type Teachers_Aggregate = {
  __typename?: 'teachers_aggregate';
  aggregate?: Maybe<Teachers_Aggregate_Fields>;
  nodes: Array<Teachers>;
};

/** aggregate fields of "teachers" */
export type Teachers_Aggregate_Fields = {
  __typename?: 'teachers_aggregate_fields';
  avg?: Maybe<Teachers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teachers_Max_Fields>;
  min?: Maybe<Teachers_Min_Fields>;
  stddev?: Maybe<Teachers_Stddev_Fields>;
  stddev_pop?: Maybe<Teachers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teachers_Stddev_Samp_Fields>;
  sum?: Maybe<Teachers_Sum_Fields>;
  var_pop?: Maybe<Teachers_Var_Pop_Fields>;
  var_samp?: Maybe<Teachers_Var_Samp_Fields>;
  variance?: Maybe<Teachers_Variance_Fields>;
};


/** aggregate fields of "teachers" */
export type Teachers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teachers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teachers" */
export type Teachers_Aggregate_Order_By = {
  avg?: Maybe<Teachers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Teachers_Max_Order_By>;
  min?: Maybe<Teachers_Min_Order_By>;
  stddev?: Maybe<Teachers_Stddev_Order_By>;
  stddev_pop?: Maybe<Teachers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Teachers_Stddev_Samp_Order_By>;
  sum?: Maybe<Teachers_Sum_Order_By>;
  var_pop?: Maybe<Teachers_Var_Pop_Order_By>;
  var_samp?: Maybe<Teachers_Var_Samp_Order_By>;
  variance?: Maybe<Teachers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teachers" */
export type Teachers_Arr_Rel_Insert_Input = {
  data: Array<Teachers_Insert_Input>;
  on_conflict?: Maybe<Teachers_On_Conflict>;
};

/** aggregate avg on columns */
export type Teachers_Avg_Fields = {
  __typename?: 'teachers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teachers" */
export type Teachers_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teachers". All fields are combined with a logical 'AND'. */
export type Teachers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teachers_Bool_Exp>>>;
  _not?: Maybe<Teachers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teachers_Bool_Exp>>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  courseEvents?: Maybe<CourseEvents_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  publicId?: Maybe<Uuid_Comparison_Exp>;
  skill?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "teachers" */
export enum Teachers_Constraint {
  /** unique or primary key constraint */
  TeachersPkey = 'teachers_pkey',
  /** unique or primary key constraint */
  TeachersPublicIdKey = 'teachers_public_id_key'
}

/** input type for incrementing integer column in table "teachers" */
export type Teachers_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "teachers" */
export type Teachers_Insert_Input = {
  birthday?: Maybe<Scalars['date']>;
  courseEvents?: Maybe<CourseEvents_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  skill?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Teachers_Max_Fields = {
  __typename?: 'teachers_max_fields';
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  skill?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "teachers" */
export type Teachers_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  skill?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teachers_Min_Fields = {
  __typename?: 'teachers_min_fields';
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  skill?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "teachers" */
export type Teachers_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  skill?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "teachers" */
export type Teachers_Mutation_Response = {
  __typename?: 'teachers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teachers>;
};

/** input type for inserting object relation for remote table "teachers" */
export type Teachers_Obj_Rel_Insert_Input = {
  data: Teachers_Insert_Input;
  on_conflict?: Maybe<Teachers_On_Conflict>;
};

/** on conflict condition type for table "teachers" */
export type Teachers_On_Conflict = {
  constraint: Teachers_Constraint;
  update_columns: Array<Teachers_Update_Column>;
  where?: Maybe<Teachers_Bool_Exp>;
};

/** ordering options when selecting data from "teachers" */
export type Teachers_Order_By = {
  birthday?: Maybe<Order_By>;
  courseEvents_aggregate?: Maybe<CourseEvents_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  publicId?: Maybe<Order_By>;
  skill?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "teachers" */
export type Teachers_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "teachers" */
export enum Teachers_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  Skill = 'skill',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "teachers" */
export type Teachers_Set_Input = {
  birthday?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['uuid']>;
  skill?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Teachers_Stddev_Fields = {
  __typename?: 'teachers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teachers" */
export type Teachers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teachers_Stddev_Pop_Fields = {
  __typename?: 'teachers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teachers" */
export type Teachers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teachers_Stddev_Samp_Fields = {
  __typename?: 'teachers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teachers" */
export type Teachers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Teachers_Sum_Fields = {
  __typename?: 'teachers_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "teachers" */
export type Teachers_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "teachers" */
export enum Teachers_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicId = 'publicId',
  /** column name */
  Skill = 'skill',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Teachers_Var_Pop_Fields = {
  __typename?: 'teachers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teachers" */
export type Teachers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teachers_Var_Samp_Fields = {
  __typename?: 'teachers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teachers" */
export type Teachers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Teachers_Variance_Fields = {
  __typename?: 'teachers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teachers" */
export type Teachers_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
