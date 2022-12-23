"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryRoomInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryRoomInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryRoomInfo", [
            { no: 6, name: "is_boss", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "monster_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { isBoss: false, configId: 0, monsterList: [] };
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
                case /* bool is_boss */ 6:
                    message.isBoss = reader.bool();
                    break;
                case /* uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* repeated Uint32Pair monster_list */ 4:
                    message.monsterList.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_boss = 6; */
        if (message.isBoss !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isBoss);
        /* uint32 config_id = 3; */
        if (message.configId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.configId);
        /* repeated Uint32Pair monster_list = 4; */
        for (let i = 0; i < message.monsterList.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.monsterList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryRoomInfo
 */
exports.RogueDiaryRoomInfo = new RogueDiaryRoomInfo$Type();
