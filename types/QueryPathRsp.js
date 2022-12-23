"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPathRsp = exports.QueryPathRsp_PathStatusType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum QueryPathRsp.PathStatusType
 */
var QueryPathRsp_PathStatusType;
(function (QueryPathRsp_PathStatusType) {
    /**
     * @generated from protobuf enum value: PATH_STATUS_TYPE_FAIL = 0;
     */
    QueryPathRsp_PathStatusType[QueryPathRsp_PathStatusType["FAIL"] = 0] = "FAIL";
    /**
     * @generated from protobuf enum value: PATH_STATUS_TYPE_SUCC = 1;
     */
    QueryPathRsp_PathStatusType[QueryPathRsp_PathStatusType["SUCC"] = 1] = "SUCC";
    /**
     * @generated from protobuf enum value: PATH_STATUS_TYPE_PARTIAL = 2;
     */
    QueryPathRsp_PathStatusType[QueryPathRsp_PathStatusType["PARTIAL"] = 2] = "PARTIAL";
})(QueryPathRsp_PathStatusType = exports.QueryPathRsp_PathStatusType || (exports.QueryPathRsp_PathStatusType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class QueryPathRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QueryPathRsp", [
            { no: 3, name: "query_status", kind: "enum", T: () => ["QueryPathRsp.PathStatusType", QueryPathRsp_PathStatusType, "PATH_STATUS_TYPE_"] },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "corners", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { queryStatus: 0, retcode: 0, queryId: 0, corners: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* QueryPathRsp.PathStatusType query_status */ 3:
                    message.queryStatus = reader.int32();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* int32 query_id */ 8:
                    message.queryId = reader.int32();
                    break;
                case /* repeated Vector corners */ 1:
                    message.corners.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* QueryPathRsp.PathStatusType query_status = 3; */
        if (message.queryStatus !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.queryStatus);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* int32 query_id = 8; */
        if (message.queryId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.queryId);
        /* repeated Vector corners = 1; */
        for (let i = 0; i < message.corners.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.corners[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryPathRsp
 */
exports.QueryPathRsp = new QueryPathRsp$Type();
