"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievement = exports.Achievement_Status = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum Achievement.Status
 */
var Achievement_Status;
(function (Achievement_Status) {
    /**
     * @generated from protobuf enum value: STATUS_INVALID = 0;
     */
    Achievement_Status[Achievement_Status["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: STATUS_UNFINISHED = 1;
     */
    Achievement_Status[Achievement_Status["UNFINISHED"] = 1] = "UNFINISHED";
    /**
     * @generated from protobuf enum value: STATUS_FINISHED = 2;
     */
    Achievement_Status[Achievement_Status["FINISHED"] = 2] = "FINISHED";
    /**
     * @generated from protobuf enum value: STATUS_REWARD_TAKEN = 3;
     */
    Achievement_Status[Achievement_Status["REWARD_TAKEN"] = 3] = "REWARD_TAKEN";
})(Achievement_Status = exports.Achievement_Status || (exports.Achievement_Status = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Achievement$Type extends runtime_5.MessageType {
    constructor() {
        super("Achievement", [
            { no: 8, name: "finish_timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "status", kind: "enum", T: () => ["Achievement.Status", Achievement_Status, "STATUS_"] }
        ]);
    }
    create(value) {
        const message = { finishTimestamp: 0, curProgress: 0, totalProgress: 0, id: 0, status: 0 };
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
                case /* uint32 finish_timestamp */ 8:
                    message.finishTimestamp = reader.uint32();
                    break;
                case /* uint32 cur_progress */ 11:
                    message.curProgress = reader.uint32();
                    break;
                case /* uint32 total_progress */ 6:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 id */ 14:
                    message.id = reader.uint32();
                    break;
                case /* Achievement.Status status */ 15:
                    message.status = reader.int32();
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
        /* uint32 finish_timestamp = 8; */
        if (message.finishTimestamp !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.finishTimestamp);
        /* uint32 cur_progress = 11; */
        if (message.curProgress !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* uint32 total_progress = 6; */
        if (message.totalProgress !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 id = 14; */
        if (message.id !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.id);
        /* Achievement.Status status = 15; */
        if (message.status !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.status);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Achievement
 */
exports.Achievement = new Achievement$Type();
