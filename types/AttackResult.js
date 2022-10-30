"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AttackResult_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackResult = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AttackResult.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AbilityIdentifier");
const dependency_2 = require("./AttackHitEffectResult");
const dependency_3 = require("./HitCollision");
const dependency_4 = require("./Vector");
const pb_1 = require("google-protobuf");
class AttackResult extends pb_1.Message {
    constructor(data) {
        super();
        _AttackResult_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AttackResult_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_resist_text" in data && data.is_resist_text != undefined) {
                this.is_resist_text = data.is_resist_text;
            }
            if ("Unk2700_GBANCFEPPIM" in data && data.Unk2700_GBANCFEPPIM != undefined) {
                this.Unk2700_GBANCFEPPIM = data.Unk2700_GBANCFEPPIM;
            }
            if ("amplify_reaction_type" in data && data.amplify_reaction_type != undefined) {
                this.amplify_reaction_type = data.amplify_reaction_type;
            }
            if ("endure_break" in data && data.endure_break != undefined) {
                this.endure_break = data.endure_break;
            }
            if ("element_type" in data && data.element_type != undefined) {
                this.element_type = data.element_type;
            }
            if ("element_durability_attenuation" in data && data.element_durability_attenuation != undefined) {
                this.element_durability_attenuation = data.element_durability_attenuation;
            }
            if ("defense_id" in data && data.defense_id != undefined) {
                this.defense_id = data.defense_id;
            }
            if ("attack_timestamp_ms" in data && data.attack_timestamp_ms != undefined) {
                this.attack_timestamp_ms = data.attack_timestamp_ms;
            }
            if ("bullet_fly_time_ms" in data && data.bullet_fly_time_ms != undefined) {
                this.bullet_fly_time_ms = data.bullet_fly_time_ms;
            }
            if ("is_crit" in data && data.is_crit != undefined) {
                this.is_crit = data.is_crit;
            }
            if ("element_amplify_rate" in data && data.element_amplify_rate != undefined) {
                this.element_amplify_rate = data.element_amplify_rate;
            }
            if ("attack_count" in data && data.attack_count != undefined) {
                this.attack_count = data.attack_count;
            }
            if ("critical_rand" in data && data.critical_rand != undefined) {
                this.critical_rand = data.critical_rand;
            }
            if ("hit_pos_type" in data && data.hit_pos_type != undefined) {
                this.hit_pos_type = data.hit_pos_type;
            }
            if ("anim_event_id" in data && data.anim_event_id != undefined) {
                this.anim_event_id = data.anim_event_id;
            }
            if ("hit_eff_result" in data && data.hit_eff_result != undefined) {
                this.hit_eff_result = data.hit_eff_result;
            }
            if ("damage_shield" in data && data.damage_shield != undefined) {
                this.damage_shield = data.damage_shield;
            }
            if ("endure_delta" in data && data.endure_delta != undefined) {
                this.endure_delta = data.endure_delta;
            }
            if ("resolved_dir" in data && data.resolved_dir != undefined) {
                this.resolved_dir = data.resolved_dir;
            }
            if ("damage" in data && data.damage != undefined) {
                this.damage = data.damage;
            }
            if ("addhurt_reaction_type" in data && data.addhurt_reaction_type != undefined) {
                this.addhurt_reaction_type = data.addhurt_reaction_type;
            }
            if ("hashed_anim_event_id" in data && data.hashed_anim_event_id != undefined) {
                this.hashed_anim_event_id = data.hashed_anim_event_id;
            }
            if ("use_gadget_damage_action" in data && data.use_gadget_damage_action != undefined) {
                this.use_gadget_damage_action = data.use_gadget_damage_action;
            }
            if ("hit_retreat_angle_compat" in data && data.hit_retreat_angle_compat != undefined) {
                this.hit_retreat_angle_compat = data.hit_retreat_angle_compat;
            }
            if ("ability_identifier" in data && data.ability_identifier != undefined) {
                this.ability_identifier = data.ability_identifier;
            }
            if ("attacker_id" in data && data.attacker_id != undefined) {
                this.attacker_id = data.attacker_id;
            }
            if ("mute_element_hurt" in data && data.mute_element_hurt != undefined) {
                this.mute_element_hurt = data.mute_element_hurt;
            }
            if ("target_type" in data && data.target_type != undefined) {
                this.target_type = data.target_type;
            }
            if ("hit_collision" in data && data.hit_collision != undefined) {
                this.hit_collision = data.hit_collision;
            }
            if ("gadget_damage_action_idx" in data && data.gadget_damage_action_idx != undefined) {
                this.gadget_damage_action_idx = data.gadget_damage_action_idx;
            }
        }
    }
    get is_resist_text() {
        return pb_1.Message.getFieldWithDefault(this, 1858, false);
    }
    set is_resist_text(value) {
        pb_1.Message.setField(this, 1858, value);
    }
    get Unk2700_GBANCFEPPIM() {
        return pb_1.Message.getFieldWithDefault(this, 1011, 0);
    }
    set Unk2700_GBANCFEPPIM(value) {
        pb_1.Message.setField(this, 1011, value);
    }
    get amplify_reaction_type() {
        return pb_1.Message.getFieldWithDefault(this, 2005, 0);
    }
    set amplify_reaction_type(value) {
        pb_1.Message.setField(this, 2005, value);
    }
    get endure_break() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set endure_break(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get element_type() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set element_type(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get element_durability_attenuation() {
        return pb_1.Message.getFieldWithDefault(this, 425, 0);
    }
    set element_durability_attenuation(value) {
        pb_1.Message.setField(this, 425, value);
    }
    get defense_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set defense_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get attack_timestamp_ms() {
        return pb_1.Message.getFieldWithDefault(this, 1188, 0);
    }
    set attack_timestamp_ms(value) {
        pb_1.Message.setField(this, 1188, value);
    }
    get bullet_fly_time_ms() {
        return pb_1.Message.getFieldWithDefault(this, 91, 0);
    }
    set bullet_fly_time_ms(value) {
        pb_1.Message.setField(this, 91, value);
    }
    get is_crit() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_crit(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get element_amplify_rate() {
        return pb_1.Message.getFieldWithDefault(this, 900, 0);
    }
    set element_amplify_rate(value) {
        pb_1.Message.setField(this, 900, value);
    }
    get attack_count() {
        return pb_1.Message.getFieldWithDefault(this, 1564, 0);
    }
    set attack_count(value) {
        pb_1.Message.setField(this, 1564, value);
    }
    get critical_rand() {
        return pb_1.Message.getFieldWithDefault(this, 1664, 0);
    }
    set critical_rand(value) {
        pb_1.Message.setField(this, 1664, value);
    }
    get hit_pos_type() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set hit_pos_type(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get anim_event_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, "");
    }
    set anim_event_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get hit_eff_result() {
        return pb_1.Message.getWrapperField(this, dependency_2.AttackHitEffectResult, 8);
    }
    set hit_eff_result(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_hit_eff_result() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get damage_shield() {
        return pb_1.Message.getFieldWithDefault(this, 1202, 0);
    }
    set damage_shield(value) {
        pb_1.Message.setField(this, 1202, value);
    }
    get endure_delta() {
        return pb_1.Message.getFieldWithDefault(this, 430, 0);
    }
    set endure_delta(value) {
        pb_1.Message.setField(this, 430, value);
    }
    get resolved_dir() {
        return pb_1.Message.getWrapperField(this, dependency_4.Vector, 1);
    }
    set resolved_dir(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_resolved_dir() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get damage() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set damage(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get addhurt_reaction_type() {
        return pb_1.Message.getFieldWithDefault(this, 1887, 0);
    }
    set addhurt_reaction_type(value) {
        pb_1.Message.setField(this, 1887, value);
    }
    get hashed_anim_event_id() {
        return pb_1.Message.getFieldWithDefault(this, 278, 0);
    }
    set hashed_anim_event_id(value) {
        pb_1.Message.setField(this, 278, value);
    }
    get use_gadget_damage_action() {
        return pb_1.Message.getFieldWithDefault(this, 1418, false);
    }
    set use_gadget_damage_action(value) {
        pb_1.Message.setField(this, 1418, value);
    }
    get hit_retreat_angle_compat() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set hit_retreat_angle_compat(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get ability_identifier() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityIdentifier, 14);
    }
    set ability_identifier(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_ability_identifier() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get attacker_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set attacker_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get mute_element_hurt() {
        return pb_1.Message.getFieldWithDefault(this, 1530, false);
    }
    set mute_element_hurt(value) {
        pb_1.Message.setField(this, 1530, value);
    }
    get target_type() {
        return pb_1.Message.getFieldWithDefault(this, 1366, 0);
    }
    set target_type(value) {
        pb_1.Message.setField(this, 1366, value);
    }
    get hit_collision() {
        return pb_1.Message.getWrapperField(this, dependency_3.HitCollision, 10);
    }
    set hit_collision(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_hit_collision() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get gadget_damage_action_idx() {
        return pb_1.Message.getFieldWithDefault(this, 1110, 0);
    }
    set gadget_damage_action_idx(value) {
        pb_1.Message.setField(this, 1110, value);
    }
    static fromObject(data) {
        const message = new AttackResult({});
        if (data.is_resist_text != null) {
            message.is_resist_text = data.is_resist_text;
        }
        if (data.Unk2700_GBANCFEPPIM != null) {
            message.Unk2700_GBANCFEPPIM = data.Unk2700_GBANCFEPPIM;
        }
        if (data.amplify_reaction_type != null) {
            message.amplify_reaction_type = data.amplify_reaction_type;
        }
        if (data.endure_break != null) {
            message.endure_break = data.endure_break;
        }
        if (data.element_type != null) {
            message.element_type = data.element_type;
        }
        if (data.element_durability_attenuation != null) {
            message.element_durability_attenuation = data.element_durability_attenuation;
        }
        if (data.defense_id != null) {
            message.defense_id = data.defense_id;
        }
        if (data.attack_timestamp_ms != null) {
            message.attack_timestamp_ms = data.attack_timestamp_ms;
        }
        if (data.bullet_fly_time_ms != null) {
            message.bullet_fly_time_ms = data.bullet_fly_time_ms;
        }
        if (data.is_crit != null) {
            message.is_crit = data.is_crit;
        }
        if (data.element_amplify_rate != null) {
            message.element_amplify_rate = data.element_amplify_rate;
        }
        if (data.attack_count != null) {
            message.attack_count = data.attack_count;
        }
        if (data.critical_rand != null) {
            message.critical_rand = data.critical_rand;
        }
        if (data.hit_pos_type != null) {
            message.hit_pos_type = data.hit_pos_type;
        }
        if (data.anim_event_id != null) {
            message.anim_event_id = data.anim_event_id;
        }
        if (data.hit_eff_result != null) {
            message.hit_eff_result = dependency_2.AttackHitEffectResult.fromObject(data.hit_eff_result);
        }
        if (data.damage_shield != null) {
            message.damage_shield = data.damage_shield;
        }
        if (data.endure_delta != null) {
            message.endure_delta = data.endure_delta;
        }
        if (data.resolved_dir != null) {
            message.resolved_dir = dependency_4.Vector.fromObject(data.resolved_dir);
        }
        if (data.damage != null) {
            message.damage = data.damage;
        }
        if (data.addhurt_reaction_type != null) {
            message.addhurt_reaction_type = data.addhurt_reaction_type;
        }
        if (data.hashed_anim_event_id != null) {
            message.hashed_anim_event_id = data.hashed_anim_event_id;
        }
        if (data.use_gadget_damage_action != null) {
            message.use_gadget_damage_action = data.use_gadget_damage_action;
        }
        if (data.hit_retreat_angle_compat != null) {
            message.hit_retreat_angle_compat = data.hit_retreat_angle_compat;
        }
        if (data.ability_identifier != null) {
            message.ability_identifier = dependency_1.AbilityIdentifier.fromObject(data.ability_identifier);
        }
        if (data.attacker_id != null) {
            message.attacker_id = data.attacker_id;
        }
        if (data.mute_element_hurt != null) {
            message.mute_element_hurt = data.mute_element_hurt;
        }
        if (data.target_type != null) {
            message.target_type = data.target_type;
        }
        if (data.hit_collision != null) {
            message.hit_collision = dependency_3.HitCollision.fromObject(data.hit_collision);
        }
        if (data.gadget_damage_action_idx != null) {
            message.gadget_damage_action_idx = data.gadget_damage_action_idx;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_resist_text != null) {
            data.is_resist_text = this.is_resist_text;
        }
        if (this.Unk2700_GBANCFEPPIM != null) {
            data.Unk2700_GBANCFEPPIM = this.Unk2700_GBANCFEPPIM;
        }
        if (this.amplify_reaction_type != null) {
            data.amplify_reaction_type = this.amplify_reaction_type;
        }
        if (this.endure_break != null) {
            data.endure_break = this.endure_break;
        }
        if (this.element_type != null) {
            data.element_type = this.element_type;
        }
        if (this.element_durability_attenuation != null) {
            data.element_durability_attenuation = this.element_durability_attenuation;
        }
        if (this.defense_id != null) {
            data.defense_id = this.defense_id;
        }
        if (this.attack_timestamp_ms != null) {
            data.attack_timestamp_ms = this.attack_timestamp_ms;
        }
        if (this.bullet_fly_time_ms != null) {
            data.bullet_fly_time_ms = this.bullet_fly_time_ms;
        }
        if (this.is_crit != null) {
            data.is_crit = this.is_crit;
        }
        if (this.element_amplify_rate != null) {
            data.element_amplify_rate = this.element_amplify_rate;
        }
        if (this.attack_count != null) {
            data.attack_count = this.attack_count;
        }
        if (this.critical_rand != null) {
            data.critical_rand = this.critical_rand;
        }
        if (this.hit_pos_type != null) {
            data.hit_pos_type = this.hit_pos_type;
        }
        if (this.anim_event_id != null) {
            data.anim_event_id = this.anim_event_id;
        }
        if (this.hit_eff_result != null) {
            data.hit_eff_result = this.hit_eff_result.toObject();
        }
        if (this.damage_shield != null) {
            data.damage_shield = this.damage_shield;
        }
        if (this.endure_delta != null) {
            data.endure_delta = this.endure_delta;
        }
        if (this.resolved_dir != null) {
            data.resolved_dir = this.resolved_dir.toObject();
        }
        if (this.damage != null) {
            data.damage = this.damage;
        }
        if (this.addhurt_reaction_type != null) {
            data.addhurt_reaction_type = this.addhurt_reaction_type;
        }
        if (this.hashed_anim_event_id != null) {
            data.hashed_anim_event_id = this.hashed_anim_event_id;
        }
        if (this.use_gadget_damage_action != null) {
            data.use_gadget_damage_action = this.use_gadget_damage_action;
        }
        if (this.hit_retreat_angle_compat != null) {
            data.hit_retreat_angle_compat = this.hit_retreat_angle_compat;
        }
        if (this.ability_identifier != null) {
            data.ability_identifier = this.ability_identifier.toObject();
        }
        if (this.attacker_id != null) {
            data.attacker_id = this.attacker_id;
        }
        if (this.mute_element_hurt != null) {
            data.mute_element_hurt = this.mute_element_hurt;
        }
        if (this.target_type != null) {
            data.target_type = this.target_type;
        }
        if (this.hit_collision != null) {
            data.hit_collision = this.hit_collision.toObject();
        }
        if (this.gadget_damage_action_idx != null) {
            data.gadget_damage_action_idx = this.gadget_damage_action_idx;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_resist_text != false)
            writer.writeBool(1858, this.is_resist_text);
        if (this.Unk2700_GBANCFEPPIM != 0)
            writer.writeUint32(1011, this.Unk2700_GBANCFEPPIM);
        if (this.amplify_reaction_type != 0)
            writer.writeUint32(2005, this.amplify_reaction_type);
        if (this.endure_break != 0)
            writer.writeUint32(7, this.endure_break);
        if (this.element_type != 0)
            writer.writeUint32(5, this.element_type);
        if (this.element_durability_attenuation != 0)
            writer.writeFloat(425, this.element_durability_attenuation);
        if (this.defense_id != 0)
            writer.writeUint32(15, this.defense_id);
        if (this.attack_timestamp_ms != 0)
            writer.writeUint32(1188, this.attack_timestamp_ms);
        if (this.bullet_fly_time_ms != 0)
            writer.writeUint32(91, this.bullet_fly_time_ms);
        if (this.is_crit != false)
            writer.writeBool(13, this.is_crit);
        if (this.element_amplify_rate != 0)
            writer.writeFloat(900, this.element_amplify_rate);
        if (this.attack_count != 0)
            writer.writeUint32(1564, this.attack_count);
        if (this.critical_rand != 0)
            writer.writeUint32(1664, this.critical_rand);
        if (this.hit_pos_type != 0)
            writer.writeUint32(2, this.hit_pos_type);
        if (this.anim_event_id.length)
            writer.writeString(4, this.anim_event_id);
        if (this.has_hit_eff_result)
            writer.writeMessage(8, this.hit_eff_result, () => this.hit_eff_result.serialize(writer));
        if (this.damage_shield != 0)
            writer.writeFloat(1202, this.damage_shield);
        if (this.endure_delta != 0)
            writer.writeFloat(430, this.endure_delta);
        if (this.has_resolved_dir)
            writer.writeMessage(1, this.resolved_dir, () => this.resolved_dir.serialize(writer));
        if (this.damage != 0)
            writer.writeFloat(6, this.damage);
        if (this.addhurt_reaction_type != 0)
            writer.writeUint32(1887, this.addhurt_reaction_type);
        if (this.hashed_anim_event_id != 0)
            writer.writeUint32(278, this.hashed_anim_event_id);
        if (this.use_gadget_damage_action != false)
            writer.writeBool(1418, this.use_gadget_damage_action);
        if (this.hit_retreat_angle_compat != 0)
            writer.writeInt32(9, this.hit_retreat_angle_compat);
        if (this.has_ability_identifier)
            writer.writeMessage(14, this.ability_identifier, () => this.ability_identifier.serialize(writer));
        if (this.attacker_id != 0)
            writer.writeUint32(11, this.attacker_id);
        if (this.mute_element_hurt != false)
            writer.writeBool(1530, this.mute_element_hurt);
        if (this.target_type != 0)
            writer.writeUint32(1366, this.target_type);
        if (this.has_hit_collision)
            writer.writeMessage(10, this.hit_collision, () => this.hit_collision.serialize(writer));
        if (this.gadget_damage_action_idx != 0)
            writer.writeUint32(1110, this.gadget_damage_action_idx);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AttackResult();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1858:
                    message.is_resist_text = reader.readBool();
                    break;
                case 1011:
                    message.Unk2700_GBANCFEPPIM = reader.readUint32();
                    break;
                case 2005:
                    message.amplify_reaction_type = reader.readUint32();
                    break;
                case 7:
                    message.endure_break = reader.readUint32();
                    break;
                case 5:
                    message.element_type = reader.readUint32();
                    break;
                case 425:
                    message.element_durability_attenuation = reader.readFloat();
                    break;
                case 15:
                    message.defense_id = reader.readUint32();
                    break;
                case 1188:
                    message.attack_timestamp_ms = reader.readUint32();
                    break;
                case 91:
                    message.bullet_fly_time_ms = reader.readUint32();
                    break;
                case 13:
                    message.is_crit = reader.readBool();
                    break;
                case 900:
                    message.element_amplify_rate = reader.readFloat();
                    break;
                case 1564:
                    message.attack_count = reader.readUint32();
                    break;
                case 1664:
                    message.critical_rand = reader.readUint32();
                    break;
                case 2:
                    message.hit_pos_type = reader.readUint32();
                    break;
                case 4:
                    message.anim_event_id = reader.readString();
                    break;
                case 8:
                    reader.readMessage(message.hit_eff_result, () => message.hit_eff_result = dependency_2.AttackHitEffectResult.deserialize(reader));
                    break;
                case 1202:
                    message.damage_shield = reader.readFloat();
                    break;
                case 430:
                    message.endure_delta = reader.readFloat();
                    break;
                case 1:
                    reader.readMessage(message.resolved_dir, () => message.resolved_dir = dependency_4.Vector.deserialize(reader));
                    break;
                case 6:
                    message.damage = reader.readFloat();
                    break;
                case 1887:
                    message.addhurt_reaction_type = reader.readUint32();
                    break;
                case 278:
                    message.hashed_anim_event_id = reader.readUint32();
                    break;
                case 1418:
                    message.use_gadget_damage_action = reader.readBool();
                    break;
                case 9:
                    message.hit_retreat_angle_compat = reader.readInt32();
                    break;
                case 14:
                    reader.readMessage(message.ability_identifier, () => message.ability_identifier = dependency_1.AbilityIdentifier.deserialize(reader));
                    break;
                case 11:
                    message.attacker_id = reader.readUint32();
                    break;
                case 1530:
                    message.mute_element_hurt = reader.readBool();
                    break;
                case 1366:
                    message.target_type = reader.readUint32();
                    break;
                case 10:
                    reader.readMessage(message.hit_collision, () => message.hit_collision = dependency_3.HitCollision.deserialize(reader));
                    break;
                case 1110:
                    message.gadget_damage_action_idx = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AttackResult.deserialize(bytes);
    }
}
exports.AttackResult = AttackResult;
_AttackResult_one_of_decls = new WeakMap();
