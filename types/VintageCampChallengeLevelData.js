"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageCampChallengeLevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageCampChallengeLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageCampChallengeLevelData", [
            { no: 13, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isFinish: false, stageId: 0, levelId: 0, isOpen: false };
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
                case /* bool is_finish */ 13:
                    message.isFinish = reader.bool();
                    break;
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 level_id */ 1:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_open */ 12:
                    message.isOpen = reader.bool();
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
        /* bool is_finish = 13; */
        if (message.isFinish !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isFinish);
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 level_id = 1; */
        if (message.levelId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool is_open = 12; */
        if (message.isOpen !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageCampChallengeLevelData
 */
exports.VintageCampChallengeLevelData = new VintageCampChallengeLevelData$Type();
