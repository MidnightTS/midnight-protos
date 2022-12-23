"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryDungeonRecord_1 = require("./RogueDiaryDungeonRecord");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryStageInfo", [
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "best_record", kind: "message", T: () => RogueDiaryDungeonRecord_1.RogueDiaryDungeonRecord },
            { no: 11, name: "is_have_try", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, isHaveTry: false };
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
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
                    break;
                case /* RogueDiaryDungeonRecord best_record */ 9:
                    message.bestRecord = RogueDiaryDungeonRecord_1.RogueDiaryDungeonRecord.internalBinaryRead(reader, reader.uint32(), options, message.bestRecord);
                    break;
                case /* bool is_have_try */ 11:
                    message.isHaveTry = reader.bool();
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
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.stageId);
        /* RogueDiaryDungeonRecord best_record = 9; */
        if (message.bestRecord)
            RogueDiaryDungeonRecord_1.RogueDiaryDungeonRecord.internalBinaryWrite(message.bestRecord, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_have_try = 11; */
        if (message.isHaveTry !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isHaveTry);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryStageInfo
 */
exports.RogueDiaryStageInfo = new RogueDiaryStageInfo$Type();
