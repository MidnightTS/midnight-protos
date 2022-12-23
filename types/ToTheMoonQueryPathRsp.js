"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonQueryPathRsp = exports.ToTheMoonQueryPathRsp_PathStatusType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum ToTheMoonQueryPathRsp.PathStatusType
 */
var ToTheMoonQueryPathRsp_PathStatusType;
(function (ToTheMoonQueryPathRsp_PathStatusType) {
    /**
     * @generated from protobuf enum value: PATH_STATUS_TYPE_FAIL = 0;
     */
    ToTheMoonQueryPathRsp_PathStatusType[ToTheMoonQueryPathRsp_PathStatusType["FAIL"] = 0] = "FAIL";
    /**
     * @generated from protobuf enum value: PATH_STATUS_TYPE_SUCC = 1;
     */
    ToTheMoonQueryPathRsp_PathStatusType[ToTheMoonQueryPathRsp_PathStatusType["SUCC"] = 1] = "SUCC";
    /**
     * @generated from protobuf enum value: PATH_STATUS_TYPE_PARTIAL = 2;
     */
    ToTheMoonQueryPathRsp_PathStatusType[ToTheMoonQueryPathRsp_PathStatusType["PARTIAL"] = 2] = "PARTIAL";
})(ToTheMoonQueryPathRsp_PathStatusType = exports.ToTheMoonQueryPathRsp_PathStatusType || (exports.ToTheMoonQueryPathRsp_PathStatusType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonQueryPathRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ToTheMoonQueryPathRsp", [
            { no: 5, name: "index", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "corners", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector },
            { no: 15, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "level", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "query_status", kind: "enum", T: () => ["ToTheMoonQueryPathRsp.PathStatusType", ToTheMoonQueryPathRsp_PathStatusType, "PATH_STATUS_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { index: [], corners: [], queryId: 0, retcode: 0, level: [], queryStatus: 0 };
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
                case /* repeated int64 index */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.index.push(reader.int64().toBigInt());
                    else
                        message.index.push(reader.int64().toBigInt());
                    break;
                case /* repeated Vector corners */ 3:
                    message.corners.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 query_id */ 15:
                    message.queryId = reader.int32();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* repeated int32 level */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.level.push(reader.int32());
                    else
                        message.level.push(reader.int32());
                    break;
                case /* ToTheMoonQueryPathRsp.PathStatusType query_status */ 14:
                    message.queryStatus = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int64 index = 5; */
        if (message.index.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.index.length; i++)
                writer.int64(message.index[i]);
            writer.join();
        }
        /* repeated Vector corners = 3; */
        for (let i = 0; i < message.corners.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.corners[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* int32 query_id = 15; */
        if (message.queryId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.queryId);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated int32 level = 8; */
        if (message.level.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.level.length; i++)
                writer.int32(message.level[i]);
            writer.join();
        }
        /* ToTheMoonQueryPathRsp.PathStatusType query_status = 14; */
        if (message.queryStatus !== 0)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.queryStatus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonQueryPathRsp
 */
exports.ToTheMoonQueryPathRsp = new ToTheMoonQueryPathRsp$Type();
