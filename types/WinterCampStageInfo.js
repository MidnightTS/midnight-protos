"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampStageInfo", [
            { no: 3, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { openTime: 0, totalProgress: 0, curProgress: 0, id: 0, isFinished: false };
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
                case /* uint32 open_time */ 3:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 total_progress */ 2:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 cur_progress */ 9:
                    message.curProgress = reader.uint32();
                    break;
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* Vector pos */ 14:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* bool is_finished */ 8:
                    message.isFinished = reader.bool();
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
        /* uint32 open_time = 3; */
        if (message.openTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 total_progress = 2; */
        if (message.totalProgress !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 cur_progress = 9; */
        if (message.curProgress !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.id);
        /* Vector pos = 14; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_finished = 8; */
        if (message.isFinished !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isFinished);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampStageInfo
 */
exports.WinterCampStageInfo = new WinterCampStageInfo$Type();