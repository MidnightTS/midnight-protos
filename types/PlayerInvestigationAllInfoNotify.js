"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInvestigationAllInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InvestigationTarget_1 = require("./InvestigationTarget");
const Investigation_1 = require("./Investigation");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerInvestigationAllInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerInvestigationAllInfoNotify", [
            { no: 11, name: "investigation_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Investigation_1.Investigation },
            { no: 5, name: "investigation_target_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InvestigationTarget_1.InvestigationTarget }
        ]);
    }
    create(value) {
        const message = { investigationList: [], investigationTargetList: [] };
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
                case /* repeated Investigation investigation_list */ 11:
                    message.investigationList.push(Investigation_1.Investigation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated InvestigationTarget investigation_target_list */ 5:
                    message.investigationTargetList.push(InvestigationTarget_1.InvestigationTarget.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated Investigation investigation_list = 11; */
        for (let i = 0; i < message.investigationList.length; i++)
            Investigation_1.Investigation.internalBinaryWrite(message.investigationList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated InvestigationTarget investigation_target_list = 5; */
        for (let i = 0; i < message.investigationTargetList.length; i++)
            InvestigationTarget_1.InvestigationTarget.internalBinaryWrite(message.investigationTargetList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerInvestigationAllInfoNotify
 */
exports.PlayerInvestigationAllInfoNotify = new PlayerInvestigationAllInfoNotify$Type();
