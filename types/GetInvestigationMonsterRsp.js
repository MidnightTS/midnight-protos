"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInvestigationMonsterRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InvestigationMonster_1 = require("./InvestigationMonster");
// @generated message type with reflection information, may provide speed optimized methods
class GetInvestigationMonsterRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetInvestigationMonsterRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "is_for_mark", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "monster_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InvestigationMonster_1.InvestigationMonster }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isForMark: false, monsterList: [] };
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
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_for_mark */ 11:
                    message.isForMark = reader.bool();
                    break;
                case /* repeated InvestigationMonster monster_list */ 14:
                    message.monsterList.push(InvestigationMonster_1.InvestigationMonster.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_for_mark = 11; */
        if (message.isForMark !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isForMark);
        /* repeated InvestigationMonster monster_list = 14; */
        for (let i = 0; i < message.monsterList.length; i++)
            InvestigationMonster_1.InvestigationMonster.internalBinaryWrite(message.monsterList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetInvestigationMonsterRsp
 */
exports.GetInvestigationMonsterRsp = new GetInvestigationMonsterRsp$Type();
