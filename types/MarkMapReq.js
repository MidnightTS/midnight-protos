"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkMapReq = exports.MarkMapReq_Operation = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MapMarkPoint_1 = require("./MapMarkPoint");
/**
 * @generated from protobuf enum MarkMapReq.Operation
 */
var MarkMapReq_Operation;
(function (MarkMapReq_Operation) {
    /**
     * @generated from protobuf enum value: OPERATION_ADD = 0;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["ADD"] = 0] = "ADD";
    /**
     * @generated from protobuf enum value: OPERATION_MOD = 1;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["MOD"] = 1] = "MOD";
    /**
     * @generated from protobuf enum value: OPERATION_DEL = 2;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["DEL"] = 2] = "DEL";
    /**
     * @generated from protobuf enum value: OPERATION_GET = 3;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["GET"] = 3] = "GET";
})(MarkMapReq_Operation = exports.MarkMapReq_Operation || (exports.MarkMapReq_Operation = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MarkMapReq$Type extends runtime_5.MessageType {
    constructor() {
        super("MarkMapReq", [
            { no: 3, name: "op", kind: "enum", T: () => ["MarkMapReq.Operation", MarkMapReq_Operation, "OPERATION_"] },
            { no: 6, name: "old", kind: "message", T: () => MapMarkPoint_1.MapMarkPoint },
            { no: 13, name: "mark", kind: "message", T: () => MapMarkPoint_1.MapMarkPoint }
        ]);
    }
    create(value) {
        const message = { op: 0 };
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
                case /* MarkMapReq.Operation op */ 3:
                    message.op = reader.int32();
                    break;
                case /* MapMarkPoint old */ 6:
                    message.old = MapMarkPoint_1.MapMarkPoint.internalBinaryRead(reader, reader.uint32(), options, message.old);
                    break;
                case /* MapMarkPoint mark */ 13:
                    message.mark = MapMarkPoint_1.MapMarkPoint.internalBinaryRead(reader, reader.uint32(), options, message.mark);
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
        /* MarkMapReq.Operation op = 3; */
        if (message.op !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.op);
        /* MapMarkPoint old = 6; */
        if (message.old)
            MapMarkPoint_1.MapMarkPoint.internalBinaryWrite(message.old, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MapMarkPoint mark = 13; */
        if (message.mark)
            MapMarkPoint_1.MapMarkPoint.internalBinaryWrite(message.mark, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MarkMapReq
 */
exports.MarkMapReq = new MarkMapReq$Type();
