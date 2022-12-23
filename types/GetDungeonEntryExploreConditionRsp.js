"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDungeonEntryExploreConditionRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonEntryCond_1 = require("./DungeonEntryCond");
// @generated message type with reflection information, may provide speed optimized methods
class GetDungeonEntryExploreConditionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetDungeonEntryExploreConditionRsp", [
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "dungeon_entry_cond", kind: "message", T: () => DungeonEntryCond_1.DungeonEntryCond }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
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
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* DungeonEntryCond dungeon_entry_cond */ 14:
                    message.dungeonEntryCond = DungeonEntryCond_1.DungeonEntryCond.internalBinaryRead(reader, reader.uint32(), options, message.dungeonEntryCond);
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
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* DungeonEntryCond dungeon_entry_cond = 14; */
        if (message.dungeonEntryCond)
            DungeonEntryCond_1.DungeonEntryCond.internalBinaryWrite(message.dungeonEntryCond, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetDungeonEntryExploreConditionRsp
 */
exports.GetDungeonEntryExploreConditionRsp = new GetDungeonEntryExploreConditionRsp$Type();
