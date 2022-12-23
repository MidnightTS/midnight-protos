"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrucibleActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CrucibleBattleUidInfo_1 = require("./CrucibleBattleUidInfo");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class CrucibleActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CrucibleActivityDetailInfo", [
            { no: 5, name: "battle_world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 11, name: "uid_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrucibleBattleUidInfo_1.CrucibleBattleUidInfo }
        ]);
    }
    create(value) {
        const message = { battleWorldLevel: 0, costTime: 0, uidInfoList: [] };
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
                case /* uint32 battle_world_level */ 5:
                    message.battleWorldLevel = reader.uint32();
                    break;
                case /* uint32 cost_time */ 7:
                    message.costTime = reader.uint32();
                    break;
                case /* Vector pos */ 9:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* repeated CrucibleBattleUidInfo uid_info_list */ 11:
                    message.uidInfoList.push(CrucibleBattleUidInfo_1.CrucibleBattleUidInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 battle_world_level = 5; */
        if (message.battleWorldLevel !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.battleWorldLevel);
        /* uint32 cost_time = 7; */
        if (message.costTime !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.costTime);
        /* Vector pos = 9; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated CrucibleBattleUidInfo uid_info_list = 11; */
        for (let i = 0; i < message.uidInfoList.length; i++)
            CrucibleBattleUidInfo_1.CrucibleBattleUidInfo.internalBinaryWrite(message.uidInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrucibleActivityDetailInfo
 */
exports.CrucibleActivityDetailInfo = new CrucibleActivityDetailInfo$Type();
