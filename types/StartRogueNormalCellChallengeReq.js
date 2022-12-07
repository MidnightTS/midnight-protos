"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartRogueNormalCellChallengeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class StartRogueNormalCellChallengeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("StartRogueNormalCellChallengeReq", [
            { no: 8, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cellId: 0, dungeonId: 0 };
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
                case /* uint32 cell_id */ 8:
                    message.cellId = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 4:
                    message.dungeonId = reader.uint32();
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
        /* uint32 cell_id = 8; */
        if (message.cellId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cellId);
        /* uint32 dungeon_id = 4; */
        if (message.dungeonId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StartRogueNormalCellChallengeReq
 */
exports.StartRogueNormalCellChallengeReq = new StartRogueNormalCellChallengeReq$Type();