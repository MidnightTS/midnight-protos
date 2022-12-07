"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusMonsterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusMonsterInfo", [
            { no: 10, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { level: 0, monsterId: 0, count: 0 };
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
                case /* uint32 level */ 10:
                    message.level = reader.uint32();
                    break;
                case /* uint32 monster_id */ 8:
                    message.monsterId = reader.uint32();
                    break;
                case /* uint32 count */ 9:
                    message.count = reader.uint32();
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
        /* uint32 level = 10; */
        if (message.level !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 monster_id = 8; */
        if (message.monsterId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* uint32 count = 9; */
        if (message.count !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusMonsterInfo
 */
exports.InBattleMechanicusMonsterInfo = new InBattleMechanicusMonsterInfo$Type();
